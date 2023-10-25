import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {
  username!: string | null;
  // currentUser: any;

  // constructor(private authService: AuthService) { }

  // ngOnInit(): void {
  //   this.currentUser = this.authService.getCurrentUser();
  // }  
  // username: string = localStorage.getItem('username') || '';
  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
}
