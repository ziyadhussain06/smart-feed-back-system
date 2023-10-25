import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanybranchComponent } from './companybranch/companybranch.component';
import { ReviewsbranchComponent } from './reviewsbranch/reviewsbranch.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
  
    ReviewsbranchComponent,
       QuestionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BranchModule { }
