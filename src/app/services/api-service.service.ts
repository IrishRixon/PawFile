import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/authentication';
import { HttpClient, provideHttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post<T>(url: string, body: T): Observable<T> {
    return this.http.post(url, body, {
      withCredentials: true
    }) as Observable<T>;
  }

  postPetImage<T>(url: string, body: T): Observable<T> {
    return this.http.post(url, body, {
      reportProgress: true,
      observe: 'events'
    }) as Observable<T>;
  }

  put<T>(url: string, body: T): Observable<T> {
    return this.http.put(url, body) as Observable<T>;
  }
}
