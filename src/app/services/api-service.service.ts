import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post<T>(url: string, body: User): Observable<T> {
    return this.http.post(url, body) as Observable<T>;
  }
}
