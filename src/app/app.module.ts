import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './components/admin/side-nav/side-nav.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { CompanyDashboardComponent } from './pages/Branch/company-dashboard/company-dashboard.component';
import { BranchDashboardComponent } from './pages/Company/branch-dashboard/branch-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompnayListComponent } from './components/admin/compnay-list/compnay-list.component';
import { CompaniesComponent } from './pages/admin/companies/companies.component';
import { CompanybranchComponent } from './pages/Company/companybranch/companybranch.component';
import { CompanyModule } from './pages/Branch/company.module';
import { BranchsidenavComponent } from './components/Company/branchsidenav/branchsidenav.component';
import { NewCompanyModalComponent } from './components/admin/new-company-modal/new-company-modal.component';
import { NewBranchmodalComponent } from './components/Company/new-branchmodal/new-branchmodal.component';
import { ReviewsbranchComponent } from './pages/Company/reviewsbranch/reviewsbranch.component';
import { BranchlistComponent } from './components/Company/branchlist/branchlist.component';
import { ReviewsBranchComponent } from './components/Company/reviews-branch/reviews-branch.component';
import { ReviewopenmodalComponent } from './components/Company/reviewopenmodal/reviewopenmodal.component';
import { QuestionComponent } from './pages/Company/question/question.component';
import { QuestionlistComponent } from './components/Company/questionlist/questionlist.component';
import { BranchnavbarComponent } from './components/Branch/branchnavbar/branchnavbar.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { AuthInterceptor } from './auth.interceptor';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    AdminDashboardComponent,
    CompanyDashboardComponent,
    BranchDashboardComponent,
    NavbarComponent,
    CompnayListComponent,
    CompaniesComponent,
    CompanybranchComponent,
    BranchsidenavComponent,
    NewCompanyModalComponent,
    NewBranchmodalComponent,
    SideNavComponent,
    ReviewsbranchComponent,
    BranchlistComponent,
    ReviewsBranchComponent,
    ReviewopenmodalComponent,
    ReviewsbranchComponent,
    QuestionComponent,
    QuestionlistComponent,
    BranchnavbarComponent,
    StarRatingComponent,
    QuestionListComponent,
    
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CompanyModule,
    ReactiveFormsModule,
    NgChartsModule
    
    
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
