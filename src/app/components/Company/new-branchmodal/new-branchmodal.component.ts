import { HttpClient } from '@angular/common/http';
import { Component , EventEmitter, Input, OnInit, Output, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-branchmodal',
  templateUrl: './new-branchmodal.component.html',
  styleUrls: ['./new-branchmodal.component.css']
})
export class NewBranchmodalComponent implements OnInit {
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
  companyId!:any ;
  constructor(private http: HttpClient) {}
  ngOnInit(){
    if(localStorage.getItem('companyId')){
      this.companyId = localStorage.getItem('companyId');
    }
  }
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
        console.log('branch admin successful', response);
        if(response.user){
          this.adminId=response.user.id;
        }
        else{
          console.log("admin id not found")
        }
        this.signInError = "branch Create Successfully"
        this.myForm.resetForm()
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
    companyId: '',
  };
onSubmit2() {
  this.formData2.adminId=this.adminId;
  this.formData2.companyId=this.companyId;
  this.http.post('http://109.123.241.127:3000/branch', this.formData2).subscribe(
    (response) => {
      console.log('branch create successful', response);
      this.signInError = "branch Create Successfully"
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
