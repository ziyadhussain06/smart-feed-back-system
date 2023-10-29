import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../../toggle.service'
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  isSidebarVisible: boolean =true;

  constructor(private toggleService: ToggleService,private authService: AuthService, private router: Router) {
    this.toggleService.sidebarState$.subscribe(state => {
      this.isSidebarVisible = state;
    });
  }
  username: string = '';
  password: string = '';
  branchId!:any;
login() {
  this.authService.login(this.username, this.password).subscribe(
    (response: any) => {
      // console.log(response);
      this.authService.setToken(response.token.token);
      localStorage.setItem('access_token', response.token.token);
      localStorage.setItem('username', this.username);
      
      if(response.token.company){
        localStorage.setItem('companyId', response.token.company.id);
      }
      if(response.token.branch){
        this.branchId=response.token.branch.id;
        localStorage.setItem('branchId', response.token.branch.id);
      }
      
      // localStorage.setItem('Branch', response.token.branch.id);

      // console.log(this.username);
      // console.log(response.token.token);
      if (response.token.role === "super-admin"){
      this.router.navigate(['/AdminDashboard']);}
      else if(response.token.role === "company-admin"){
      this.router.navigate(['/CompanyDashboard']);}
      else if(response.token.role === "branch-admin"){
      this.router.navigate(['/BranchDashboard/'+this.branchId]);}
    },
    (error) => {
      console.error('Login failed:', error);
      alert('Invalid credentials. Please try again.');
    }
  );
}

}