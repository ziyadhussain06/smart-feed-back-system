import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Review } from 'src/app/review';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('myForm')
  myForm!: NgForm;
  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  constructor(private http: HttpClient,private authservice:AuthService) {}
  formData = {
    text: '',
    companyId:''
  };
  onSubmit() {
    const companyID = localStorage.getItem('companyId');
    
    if(companyID){
      this.formData.companyId= companyID;
    this.http.post(`http://109.123.241.127:3000/question/`, this.formData).subscribe(
      (response) => {
        console.log('question add successfully', response);
        this.myForm.resetForm();
        setTimeout(() => {
          window.location.reload();
        }, 500);
      
      },
      (error) => {
        console.error('Error occurred', error);
      }
    );
  
}}

}