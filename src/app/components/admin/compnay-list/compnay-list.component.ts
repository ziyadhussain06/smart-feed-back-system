import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService} from 'src/app/auth.service';
@Component({
  selector: 'app-compnay-list',
  templateUrl: './compnay-list.component.html',
  styleUrls: ['./compnay-list.component.css']
})
export class CompnayListComponent {
  @ViewChild('modaal') modaal!: ElementRef;
 
  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  companies: any[] | undefined;

  constructor(private authservice: AuthService) {}

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
  
  companylist: any;
  //get company on form
  viewform(companyId: string){
    const companyID = localStorage.getItem('companyId');
    if(companyID){
    this.authservice.getCompanyview(companyId)
    .subscribe(
      (data:any) => {

        this.companylist=data; 
        console.log(this.companylist)
        
      },
      error => {
        console.error('Error fetching brancheslist:', error);
      }
    );
}}
}

