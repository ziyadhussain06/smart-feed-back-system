import { Component } from '@angular/core';
import { RegistrationService } from 'src/services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData: any = {}; 
  constructor(private registrationService: RegistrationService) {}

  registerUser(userData: any) {
    this.registrationService.register(userData).subscribe(
      response => {
        console.log('User registered successfully!', response);
        alert("user register")
      },
      error => {
        console.error('Error registering user:', error);
        alert("server not working")
      }
    );
  }
}
