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
    this.authservice.getAllbrancheslist(this.companyId).subscribe(
      (data:any) => {

        this.brancheslist = data.branches;
        console.log(this.brancheslist)
      },
      error => {
        console.error('Error fetching brancheslist:', error);
      }
    );
  }
}
