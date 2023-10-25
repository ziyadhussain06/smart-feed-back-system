import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from '../../../modal.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  constructor(private authService: AuthService, private router: Router,private modalService: ModalService) {
   
  }
  @Input() menuId: any;
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  
  //Add company Modal
  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  isModalOpen() {
    return this.modalService.getIsOpen();
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.removeItem('companyId');
    this.router.navigate(['/signin']); // Navigate to the logout route
  }
}

