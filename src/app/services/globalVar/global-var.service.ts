import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {

  constructor() { }

  urlRoot: string = "http://localhost:4200/pawfile";
}
