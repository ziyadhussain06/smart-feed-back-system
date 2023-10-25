import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
@Component({
  selector: 'app-branchnavbar',
  templateUrl: './branchnavbar.component.html',
  styleUrls: ['./branchnavbar.component.css']
})
export class BranchnavbarComponent {
  [x: string]: any;
  // currentUser: any;
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username'); // Remove access token from local storage
    this.router.navigate(['/signin']); // Navigate to the logout route
  }
  username!: string | null;
  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
  
}
