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
}
