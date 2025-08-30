import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {

  constructor() { }

  // urlRoot: string = "http://localhost:3000/pawfile";
  urlRoot: string = 'https://pawfile-server.`onrender.com/pawfile';
  isOwner: boolean = true;
}
