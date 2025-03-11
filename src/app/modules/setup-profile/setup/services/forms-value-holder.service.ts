import { Injectable } from '@angular/core';
import { PetForm, UserForm } from '../../interface/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsValueHolderService {

  constructor() { }
  
  petProfileImage!: File;
  userForm!: UserForm;
  petForm!: PetForm;

  setUserForm(userForm: UserForm) {
    this.userForm = userForm;
    console.log(userForm);
    
  }

  setPetForm(petForm: PetForm) {
    this.petForm = petForm;
    console.log(petForm);
  }
}
