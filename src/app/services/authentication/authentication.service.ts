import { Injectable } from '@angular/core';
import { ApiService } from '../api-service.service';
import { Code, NewPass, User, UserEmail } from '../../interfaces/authentication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiService) { }

  signIn = (url: string, body: User): Observable<User> => {
    return this.api.post(url, body);
  }

  emailVerification = (url: string, body: User): Observable<User> => {
    return this.api.post(url, body);
  }

  codeVerification = (url: string, body: Code): Observable<Code> => {
    return this.api.post(url, body);
  }

  findAccount = (url: string, body: UserEmail): Observable<UserEmail> => {
    return this.api.post(url, body);
  } 

  changePass = (url: string, body: NewPass): Observable<NewPass> => {
    return this.api.put(url, body);
  }
}
