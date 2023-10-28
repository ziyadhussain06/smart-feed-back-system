import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent {
  @ViewChild('modal') modal!: ElementRef;

  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  questionList: any[] | undefined;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    const companyID = localStorage.getItem('companyId');
    if(companyID){
    this.authservice.getAllquestionList(companyID ).subscribe(
      data => {
        this.questionList = data.questions;
        console.log(this.questionList)
      },
      error => {
        console.error('Error fetching questionList:', error);
      }
    );
  }
}
//delete question
companyId!:any ;
deleteQuestion(companyId: number) {
    if(localStorage.getItem('companyId')){
      this.companyId = localStorage.getItem('companyId');
    }
    this.authservice.deleteoneQuestion(companyId)
      .subscribe(
        () => {
          console.log(companyId)
          console.log('delete Question successfully');
          setTimeout(() => {
            window.location.reload();
          }, 500);
          // Success message or update the UI as needed
        },
        error => {
          console.error('Error deleting Question:', error);
          // Handle error
        }
      );
  }




  companylist: any;
  //get company on form
  questionview(companyId: string){
    const companyID = localStorage.getItem('companyId');
    
    this.authservice.getquestionview(companyId)
    .subscribe(
      (data:any) => {

        this.companylist=data; 
        console.log(this.companylist)
        
      },
      error => {
        console.error('Error fetching brancheslist:', error);
      }
    );
}

// updateCompanyData(companyids:string) {
//   // Replace with the actual id

//   this.authservice.updateData(companyid)
//   .subscribe(
//     (data:any) => {

//       console.log(companyids)
      
//     },
//     error => {
//       console.error('Error fetching brancheslist:', error);
//     }
//   );
// }

}

