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
  progressBarValue!: number;

  urlRoot: string = 'http://localhost:3000/pawfile';

  submitForms() {
    this.submitUserForm()
   }

  submitUserForm() {
    this.isProceeded = true;

    this.reqForms
      .submitUserForm(
        `${this.urlRoot}/submitInitialUserForm`,
        this.formValHolder.userForm
      )
      // .pipe(finalize(() => this.submitPetForm()))
      .subscribe((res) => {
        this.finished++;
        this.updateProgressBar(this.finished);
        console.log(this.finished);
        console.log(this.progressBarValue);
        if(!res.res?.isSuccess) {
          console.log('error user form');          
        }
      });
  }

  submitPetForm() {
    this.reqForms
      .submitPetForm(
        `${this.urlRoot}/submitInitialPetForm`,
        this.formValHolder.petForm
      )
      .pipe(
        finalize(() => this.isProceeded = false)
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  updateProgressBar(num: number) {
    this.progressBarValue = num / 2 * 100;
  }
}
