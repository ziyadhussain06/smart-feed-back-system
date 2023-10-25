
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-reviewopenmodal',
  templateUrl: './reviewopenmodal.component.html',
  styleUrls: ['./reviewopenmodal.component.css']
})
export class ReviewopenmodalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
}
