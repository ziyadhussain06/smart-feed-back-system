import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuthService} from 'src/app/auth.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ModalService } from 'src/app/modal.service';
@Component({
  selector: 'app-compnay-list',
  templateUrl: './compnay-list.component.html',
  styleUrls: ['./compnay-list.component.css']
})
export class CompnayListComponent {
  @ViewChild('modaal') modaal!: ElementRef;
  selectedcompanyId!: number;
  @Input() 
  companyIds: any;
  companyInfo: any = {};
  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  companies: any[] | undefined;

  constructor(private authservice: AuthService ,private modalService: ModalService) {}

  ngOnInit() {
    this.authservice.getAllCompanies().subscribe(
      data => {
        this.companies = data;
        console.log(this.companies)

      },
      // error => {
      //   console.error('Error fetching companies:', error);
      // }
    );
  }
  companyId!:any ;
  

  deleteCompany(companyId: number) {
    if(localStorage.getItem('companyId')){
      this.companyId = localStorage.getItem('companyId');
    }
    this.authservice.deleteCompany(companyId)
      .subscribe(
        () => {
          // console.log(companyId)
          
          console.log('delete company successfully');
          setTimeout(() => {
            window.location.reload();
          }, 500);
          // Success message or update the UI as needed
        },
        error => {
          console.error('Error deleting company:', error);
          // Handle error
        }
      );
  }
  @ViewChild('table')
  table!: ElementRef;

exportTableToPDF() {
  const data = this.table.nativeElement;
  html2canvas(data).then(canvas => {
    const contentDataURL = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
    pdf.addImage(contentDataURL, 'PNG', 10, 10, 190, 0);
    pdf.save('table.pdf');
  });
}



openModal() {
  this.modalService.openModal();
}
closeModal() {
  this.modalService.closeModal();
}
isModalOpen() {
  return this.modalService.getIsOpen();
}

loadcompanyInfo(companyInfo:number) {
  this.authservice.getallcompany(companyInfo).subscribe(
    (data) => {
      console.log(this.companyId)
      this.companyInfo = data;
    },
    (error) => {
      console.error('Error fetching company info:', error);
    }
  );
}


updatecompanyInfo(companyId:number,companyInfo:any) {
  this.authservice.updateallcompany(companyId, this.companyInfo).subscribe(

    (data) => {
      debugger
      console.log('question updated successfully:', data);
      setTimeout(() => {
            window.location.reload();
          }, 500);
      // this.activeModal.close('question updated');
    },
    (error) => {
      console.error('Error updating question ', error);
    }
  );
}



}

