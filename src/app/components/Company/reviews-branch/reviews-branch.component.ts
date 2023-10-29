import { Component, Input, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-reviews-branch',
  templateUrl: './reviews-branch.component.html',
  styleUrls: ['./reviews-branch.component.css']
})
export class ReviewsBranchComponent implements OnInit {
  @ViewChild('modaaal') modaaal!: ElementRef;
  selectedreviewId!: number;
  @Input() 
  reviewId: any;
  reviewInfo: any = {};
  openModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  branchreview: any[] | undefined;
  constructor(private authservice: AuthService) {
    this.selectedreviewId = 0;
  }
  branchId!:any;
  companyId!:any;

  ngOnInit() {
    if(localStorage.getItem('branchId')){
      this.branchId = localStorage.getItem('branchId');
    }

       if(localStorage.getItem('companyId')){
      this.companyId = localStorage.getItem('companyId');
    }
    this.authservice.getAllReviewsByCompanyId(this.companyId).subscribe(
      data => {
        this.branchreview = data;
      },
      error => {
        console.error('Error fetching branchreview:', error);
      }
    );
  }
  //delete question
  CompanyId :any;
deletereview(CompanyId: number) {
    if(localStorage.getItem('CompanyId')){
      this.branchId = localStorage.getItem('CompanyId');
    }
    this.authservice.deleteonereview(CompanyId)
      .subscribe(
        () => {
          console.log(CompanyId)
          console.log('delete Question successfully');
          setTimeout(() => {
            window.location.reload();
          }, 500);
          // Success message or update the UI as needed
        },
        error => {
          console.log(CompanyId)
          console.error('Error deleting Question:', error);
          // Handle error
        }
      );
  }


  // branchlist: any;
  // //get company on form
  // reviewview(branchId: string){
  //   const companyID = localStorage.getItem('branchId');
    
  //   this.authservice.getreviewview(branchId)
  //   .subscribe(
  //     (data:any) => {

  //       this.branchlist=data; 
  //       console.log(this.branchlist)
        
  //     },
  //     error => {
  //       console.error('Error fetching brancheslist:', error);
  //     }
  //   );
loadreviewInfo(reviewInfo:number) {
  this.authservice.getreview(reviewInfo).subscribe(
    (data) => {
      // console.log(this.reviewInfo)
      
      this.reviewInfo = data;
      console.log(this.reviewInfo)
    },
    (error) => {
      console.error('Error fetching branch info:', error);
    }
  );
}
}

