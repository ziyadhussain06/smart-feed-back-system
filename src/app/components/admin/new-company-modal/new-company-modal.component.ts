import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-company-modal',
  templateUrl: './new-company-modal.component.html',
  styleUrls: ['./new-company-modal.component.css']
})
export class NewCompanyModalComponent {
  
  signInError: string = '';
  @ViewChild('myForm')
  myForm!: NgForm;
   @ViewChild('myForm2')
  myForm2!: NgForm;
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter();
  
  

  closeModal() {
    this.closeModalEvent.emit();
  }
  formsubmited1: boolean = false;
  adminId!:string;
  constructor(private http: HttpClient) {}
  formData = {
    firstName: '',
    lastName: '',
    role:'',
    email: '',
    password: '',
  };
  // ...
  onSubmit() {
    this.http.post('http://109.123.241.127:3000/user/register', this.formData).subscribe(
      (response:any) => {
        this.formsubmited1 = true;

        console.log('company admin successful', response);
        
        if(response.user){
          this.adminId=response.user.id;
        }
        else{
          console.log("admin id not found")
        }
        this.signInError = "Company Create Successfully"
        this.myForm.resetForm();
        
      },
      (error) => {
        alert(error.error.message);
        console.error('Error occurred', error);
      }
    );
  
}
formData2 = {
    name: '',
    description: '',
    adminId: '',
  };

onSubmit2() {
  
  this.formData2.adminId=this.adminId;
  this.http.post('http://109.123.241.127:3000/company', this.formData2).subscribe(
    (response) => {
     
      console.log('company admin successful', response);
      this.signInError = "Company Create Successfully"
      this.myForm2.resetForm();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    
      
    },
    (error) => {
      console.error('Error occurred', error);
    }
  );

}
}