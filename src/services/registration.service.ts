import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://109.123.241.127:3000/user/register'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user) || of(null); // Return of(null) if necessary
  }
  }