import { Component } from '@angular/core';
import { RequestFormsService } from '../services/submitForms/request-forms.service';
import { FormsValueHolderService } from '../services/forms-value-holder.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-proceed',
  standalone: false,
  templateUrl: './proceed.component.html',
  styleUrl: './proceed.component.scss',
})
export class ProceedComponent {
  constructor(
    private reqForms: RequestFormsService,
    private formValHolder: FormsValueHolderService
  ) { }

  isProceeded: boolean = false;

  finished: number = 0;
  progressBarValue: number = this.finished / 100;

  urlRoot: string = 'http://localhost:3000/pawfile';

  submitForms() {
    this.submitUserForm()
   }

  submitUserForm() {
    this.reqForms
      .submitUserForm(
        `${this.urlRoot}/submitInitialUserForm`,
        this.formValHolder.userForm
      )
      .pipe(finalize(() => this.submitPetForm()))
      .subscribe((res) => {
        console.log(res);
      });
  }

  submitPetForm() {
    this.reqForms
      .submitPetForm(
        `${this.urlRoot}/submitInitialPetForm`,
        this.formValHolder.petForm
      )
      .pipe()
      .subscribe((res) => {
        console.log(res);
      });
  }
}
