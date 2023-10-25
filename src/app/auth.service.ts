import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from './review';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //token
  private authToken: string | undefined;

  setToken(token: string) {
    // this.authToken = token;
    localStorage.setItem('access_token', token);
  }

  getToken(): string {
    // if(this.authToken!==''){
    // return this.authToken || '';
    // }
    // else{
      let token=localStorage.getItem('access_token');
      if(token && token !== ''){
        return token;
      }
      else{
        return ''
      }
    // }
  }



  private apiUrl = 'http://109.123.241.127:3000'; // Replace with your API URL

   constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/user/login`; // Replace with your login endpoint
    const body = { email:username, password:password };
    return this.http.post(url, body);
  }
  //all company admin
  private apiUrls = 'http://109.123.241.127:3000/company';
  getAllCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrls);
  }
  private mainApiUrl = 'http://109.123.241.127:3000/review/company/'
  getAllReviewsByCompanyId(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.mainApiUrl+id);
  }
  //branches review company
  private apiUrl2 = 'http://109.123.241.127:3000/review/branch/';
  getAllbranchreview(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl2+id);
  }
  //branches list company
  private apiUrl3 = 'http://109.123.241.127:3000/company/';
  getAllbrancheslist(id: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl3+id);
  }

  private apiUrl4 = 'http://109.123.241.127:3000/company/1'; // Replace with your API endpoint

  getReviewQuestions(): Observable<any> {
    return this.http.get(this.apiUrl4);
  }
  //question list
  private apiUrl6 = 'http://109.123.241.127:3000/company/'; // Replace with your API endpoint
  getAllquestionList(id: string): Observable<any> {
    return this.http.get(this.apiUrl6+id);
  }
  // review question list
  private apiUrl7 = 'http://109.123.241.127:3000/question/company/'; // Replace with your API endpoint
  getAllquestionreviewList(id: string): Observable<any> {
    return this.http.get(this.apiUrl7+id);
  }

  //analysis
  private apiUrl8 = 'http://109.123.241.127:3000/review/company/'; // Replace with your API endpoint
  companyReviewAnalysis(id: string): Observable<any> {
    return this.http.get(this.apiUrl8+id+'/analysis');
  }
  //analysis SPECIFIC COMPANY
  private apiUrl11 = 'http://109.123.241.127:3000/review/company/'; // Replace with your API endpoint
  onecompanyReviewAnalysis(id: string): Observable<any> {
    return this.http.get(this.apiUrl11+id+'/analysis');
  }

  //analysis super admin
  private apiUrl10 = 'http://109.123.241.127:3000/review/all/analysis'; // Replace with your API endpoint
  reviewallcompany(): Observable<any> {
    return this.http.get(this.apiUrl10);
  }
  
   //delete company
   private apiUrl9 = 'http://109.123.241.127:3000/company/'; // Replace with your API endpoint
   deleteCompany(id: number): Observable<any> {
     return this.http.delete(this.apiUrl9+id);
   }
}
