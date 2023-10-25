import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrls: ['./branchlist.component.css']
})
export class BranchlistComponent {
  @ViewChild('modaal') modaal!: ElementRef;

  openModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.add('show', 'd-block');
  }

  closeModaal() {
    const modalElement = this.modaal.nativeElement;
    modalElement.classList.remove('show', 'd-block');
  }
  brancheslist: any[] | undefined;

  constructor(private authservice: AuthService) {}
  adminId!:string;
  companyId!:any ;


  ngOnInit() {
    if(localStorage.getItem('companyId')){
      this.companyId = localStorage.getItem('companyId');
    }
    this.authservice.getAllbrancheslist().subscribe(
      (data:any) => {

        this.brancheslist = data[0].branches;
        console.log(this.brancheslist)
      },
      error => {
        console.error('Error fetching brancheslist:', error);
      }
    );
  }
  //delete question
branchId!:any ;
deletebranch(branchId: number) {
    if(localStorage.getItem('branchId')){
      this.companyId = localStorage.getItem('branchId');
    }
    this.authservice.deleteonebranch(branchId)
      .subscribe(
        () => {
          console.log(branchId)
          console.log('delete Question successfully');
          setTimeout(() => {
            window.location.reload();
          }, 500);
          // Success message or update the UI as needed
        },
        error => {

          console.log(branchId)
          console.error('Error deleting Question:', error);
          // Handle error
        }
      );
  }

  companylist: any;
  //get company on form
  branchview(companyId: string){
    const companyID = localStorage.getItem('companyId');
    if(companyID){
    this.authservice.getbranchview(companyId)
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
