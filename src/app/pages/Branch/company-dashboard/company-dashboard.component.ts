import { ToggleService } from '../../../toggle.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private toggleService: ToggleService, private authService: AuthService, private router: Router, private modalService: ModalService, private http: HttpClient) {

  }

  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }

  // signOut() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
  questionList: any[] | undefined;

  ngOnInit() {
    const companyID = localStorage.getItem('companyId');
    if (companyID) {
      this.authService.getAllquestionreviewList(companyID).subscribe(
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
  }

  formData: any = {
    fullName: '',
    email: '',
    city: '',
    phone: '',
    branchId: '',
  }

  submitReview() {
    const branchId = localStorage.getItem('branchId');
    let payload: any = {
      ratings: [],
      fullName: this.formData['fullName'],
      email: this.formData.email,
      city: this.formData.city,
      phone: this.formData.phone,
      branchId: Number(branchId)
    }

    if (branchId) {
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
        }
      )
    }
  }
}