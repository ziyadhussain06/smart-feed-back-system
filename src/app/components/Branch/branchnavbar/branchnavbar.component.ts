import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
@Component({
  selector: 'app-branchnavbar',
  templateUrl: './branchnavbar.component.html',
  styleUrls: ['./branchnavbar.component.css']
})
export class BranchnavbarComponent implements OnInit{
  [x: string]: any;
  @ViewChild('modaal') modaal!: ElementRef;
  @ViewChild('modaaal') modaaal!: ElementRef;
  
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
  openModaal(): void {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  openModaaal(): void {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaaal() {
    const modalElement = this.modaaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }


  branchId: any = localStorage.getItem('branchId'); // Replace with actual branch ID
  
  get qrCodeData(): string {
    return `http://localhost:4200/BranchDashboard/${this.branchId}`;
  }
}
