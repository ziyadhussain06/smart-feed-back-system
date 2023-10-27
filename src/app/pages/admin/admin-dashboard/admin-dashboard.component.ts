import { ToggleService } from '../../../toggle.service';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { ModalService } from '../../../modal.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private toggleService: ToggleService, private authService: AuthService, private router: Router,private modalService: ModalService) { }
  @ViewChild('modaal') modaal!: ElementRef;
  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }
  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  toggleSidebar() {
    this.toggleService.toggleSidebar();
  }
  // signOut() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
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

  companies!: any[];
  analysis!: any;
  ngOnInit() {
      this.authService.getAllCompanies().subscribe(res => {
        this.companies = res;
        console.log(this.companies)
      },
      error => {
        console.error('Error fetching companies:', error);
      }
    );
    this.authService.reviewallcompany().subscribe(
      data => {
        this.analysis = data;
        console.log(this.analysis)
        
      },
      error => {
        console.error('Error fetching analysis:', error);
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

  }

