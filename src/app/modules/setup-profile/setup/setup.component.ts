import { Component } from '@angular/core';
import { FormsValueHolderService } from './services/forms-value-holder.service';
import { UserForm } from '../interface/forms';

@Component({
  selector: 'app-setup',
  standalone: false,
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.scss',
})
export class SetupComponent {
  constructor(private formsValHolder: FormsValueHolderService) {}

  setUserForm(userForm: UserForm) {
    this.formsValHolder.setUserForm(userForm)
  }
}
