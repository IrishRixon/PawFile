import { Component, Input, ViewChild } from '@angular/core';
import { RequestFormsService } from '../services/submitForms/request-forms.service';
import { FormsValueHolderService } from '../services/forms-value-holder.service';
import { filter, finalize, retry, switchMap, tap } from 'rxjs';
import { FileUpload } from 'primeng/fileupload';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed',
  standalone: false,
  templateUrl: './proceed.component.html',
  styleUrl: './proceed.component.scss',
})
export class ProceedComponent {
  constructor(
    private reqForms: RequestFormsService,
    private formValHolder: FormsValueHolderService,
    private router: Router
  ) { }

  @ViewChild('fileUpload') fileUpload!: FileUpload;

  isProceeded: boolean = false;

  finished: number = 0;
  done: boolean = false;
  totalSteps: number = 3;
  progressBarValue!: number;

  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';

  submitForms() {
    this.isProceeded = true;
    this.reqForms
      .submitUserForm(
        `${this.urlRoot}/submitInitialUserForm`,
        this.formValHolder.userForm
      )
      .pipe(
        switchMap((resUser) => {
          this.updateProgressBar();
          return this.reqForms.submitPetForm(
            `${this.urlRoot}/submitInitialPetForm`,
            this.formValHolder.petForm
          );
        }),
        switchMap((resPet) => {
          const formData = new FormData();

          formData.append('image', this.formValHolder.petProfileImage);
          formData.append('_id', resPet.res!._id!)

          return this.reqForms.uploadPetImage(
            `${this.urlRoot}/uploadPetImage`,
            formData
          ).pipe(
            tap({
              complete: () => {
                this.cleanUp();
                this.updateProgressBar();
                this.done = true;
                this.redirectToDashboard();
              }
            }),
          );
        }),
      )
      .subscribe({
        error: (err) => console.log(err),
      });
  }

  cleanUp() {
    setTimeout(() => {
      this.isProceeded = false;
      this.finished = 0;
      this.done = true;
    }, 1000);
  }

  updateProgressBar() {
    this.finished++;
    this.progressBarValue = Math.floor((this.finished / 3) * 100);
  }

  redirectToDashboard() {
    setTimeout(() => {
      this.router.navigate(['dashboard']);
    }, 1000)
  }
}
