import { ToggleService } from '../../../toggle.service';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from 'src/app/modal.service';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {
  [x: string]: any;
  @ViewChild('myForm')
  myForm!: NgForm;
  branchId!: string;
   myForm1: FormGroup;

  constructor(private toggleService: ToggleService, private authService: AuthService, private router: Router, private modalService: ModalService, private http: HttpClient,private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.myForm1 = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      city: ['', Validators.required],
      review: ['', [Validators.required, this.customValidator, Validators.min(1), Validators.max(5)]]
    });
  }
  customValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (value && (isNaN(value) || value < 1 || value > 5)) {
      return { 'invalidRange': true };
    }
    return null;
  }
  
  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }
  questionList: any[] | undefined;
  companyId!:any;
  ngOnInit() : void {
    this.route.params.subscribe(params => {
      this.branchId = params['branchId'];
      localStorage.setItem('branchId',this.branchId);
      this.http.get('http://109.123.241.127:3000/branch/'+this.branchId).subscribe((data:any)=>{
        this.companyId = data.company.id;
        if (this.companyId) {
          this.authService.getAllquestionreviewList(this.companyId).subscribe(
            data => {
              if (data) {
                this.questionList = data;
                
                console.log(this.questionList)
              }
            },
            error => {
              console.error('Error fetching questionList:', error);
            }
          );
        }
        });
      
      // Use this.branchId to fetch user data or perform other actions.
    });
    
    
  }

  formData: any = {
    fullName: '',
    email: '',
    city: '',
    phone: '',
    branchId: '',
  }
  
 
  submitReview() {
    this.myForm1.markAllAsTouched();
    if (this.myForm1.valid) {
    let payload: any = {
      ratings: [],
      fullName: this.formData['fullName'],
      email: this.formData.email,
      city: this.formData.city,
      phone: this.formData.phone,
      branchId: Number(this.branchId)
    }

    if (this.branchId) {
      console.log(this.questionList)
      if (this.questionList) {
        this.questionList.map(q => {
          payload.ratings.push({ questionId: q.id, rating: Number(q.rating) })

        })
      }
      console.log(payload)

      this.http.post('http://109.123.241.127:3000/review', payload).subscribe(
        Response => {
          console.log(Response);
          this.myForm.resetForm();
          alert("Review submit successfully");
        }
      )
    }
  }
  else {
    alert("Please fill out all required fields correctly.");
}
}

  handleQRCodeScan(branchId: string) {
  
  this.router.navigate(['BranchDashboard',this.branchId]);
}
}