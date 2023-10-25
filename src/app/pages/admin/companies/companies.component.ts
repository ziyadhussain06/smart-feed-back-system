import { Component } from '@angular/core';
import { ModalService } from '../../../modal.service';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  //Add company Modal
  constructor(private modalService: ModalService){}
  openModal() {
    this.modalService.openModal();
  }

  closeModal() {
    this.modalService.closeModal();
  }

  isModalOpen() {
    return this.modalService.getIsOpen();
  }
}
