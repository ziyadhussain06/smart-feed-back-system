import { ToggleService } from '../../../toggle.service';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from 'src/app/modal.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
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
  constructor(private toggleService: ToggleService, private authService: AuthService, private router: Router, private modalService: ModalService, private http: HttpClient,private route: ActivatedRoute) {

  }

  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }

  // signOut() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
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
      debugger
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

  handleQRCodeScan(branchId: string) {
  
  this.router.navigate(['BranchDashboard',this.branchId]);
}
}