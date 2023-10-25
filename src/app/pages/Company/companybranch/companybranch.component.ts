import { Component, ElementRef, ViewChild } from '@angular/core';
import { ModalService } from '../../../modal.service';
@Component({
  selector: 'app-companybranch',
  templateUrl: './companybranch.component.html',
  styleUrls: ['./companybranch.component.css']
})
export class CompanybranchComponent {
  constructor(private modalService: ModalService) {}
  @ViewChild('modaal') modaal!: ElementRef;

  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
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

}
