import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T> (url: string): Observable<T> {
    return this.http.get(url) as Observable<T>;
  }

  update<B, R = any> (url: string, body: B): Observable<R> {
    return this.http.put<R>(url, body);
  }
  
  post<B, R = any> (url: string, body: B): Observable<R> {
    return this.http.post<R>(url, body);
  }

  delete<R = any> (url: string): Observable<R> {
    return this.http.delete<R>(url);
  }
}
