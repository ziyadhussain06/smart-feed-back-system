import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { CompanyDashboardComponent } from './pages/Branch/company-dashboard/company-dashboard.component';
import { BranchDashboardComponent } from './pages/Company/branch-dashboard/branch-dashboard.component';
import { CompaniesComponent } from './pages/admin/companies/companies.component';
import { CompanybranchComponent } from './pages/Company/companybranch/companybranch.component';
import { ReviewsbranchComponent } from './pages/Company/reviewsbranch/reviewsbranch.component';
import { QuestionComponent } from './pages/Company/question/question.component';
const routes: Routes = [
  
   { path: '', redirectTo:'signin', pathMatch: 'full'},
  {path: 'signin', component : SigninComponent },
  {path: 'signup', component : SignupComponent },
  {path: 'AdminDashboard', component : AdminDashboardComponent },
  {path: 'BranchDashboard', component : CompanyDashboardComponent },
  {path: 'CompanyDashboard', component : BranchDashboardComponent },
  {path: 'Companies', component : CompaniesComponent },
  {path: 'Branches', component : CompanybranchComponent },
  {path: 'Reviews', component : ReviewsbranchComponent },
  {path: 'Question', component : QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  
})
export class AppRoutingModule { }
