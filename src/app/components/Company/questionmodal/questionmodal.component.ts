import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-questionmodal',
  templateUrl: './questionmodal.component.html',
  styleUrls: ['./questionmodal.component.css']
})
export class QuestionmodalComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Input() 
  companyId!: number;
  companyInfo: any = {}; // Object to hold company information

  constructor( private authService: AuthService) {}

  ngOnInit() {
    this.loadCompanyInfo();
  }



  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }
  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  loadCompanyInfo() {
    this.authService.getCompany(this.companyId).subscribe(
      (data) => {
        this.companyInfo = data;
      },
      (error) => {
        console.error('Error fetching company info:', error);
      }
    );
  }
  
  updateCompanyInfo() {
    this.authService.updateCompany(this.companyId, this.companyInfo).subscribe(
      (data) => {
        console.log('Company info updated successfully:', data);
        // this.activeModal.close('Company info updated');
      },
      (error) => {
        console.error('Error updating company info:', error);
      }
    );
  }
}
