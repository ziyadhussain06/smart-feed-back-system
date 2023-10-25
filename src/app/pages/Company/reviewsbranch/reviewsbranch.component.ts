import { Component } from '@angular/core';
import { ModalService } from 'src/app/modal.service';
@Component({
  selector: 'app-reviewsbranch',
  templateUrl: './reviewsbranch.component.html',
  styleUrls: ['./reviewsbranch.component.css']
})
export class ReviewsbranchComponent {
  constructor(private modalService: ModalService) {}
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
