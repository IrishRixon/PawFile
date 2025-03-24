import { Component, Input, ViewChild } from '@angular/core';
import { RequestFormsService } from '../services/submitForms/request-forms.service';
import { FormsValueHolderService } from '../services/forms-value-holder.service';
import { filter, finalize, retry, switchMap } from 'rxjs';
import { FileUpload } from 'primeng/fileupload';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { PetImageFormData } from '../../interface/forms';

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
  ) {}

  @ViewChild('fileUpload') fileUpload!: FileUpload;

  isProceeded: boolean = false;

  finished: number = 0;
  done: boolean = false;
  totalSteps: number = 3;
  progressBarValue!: number;

  urlRoot: string = 'http://localhost:3000/pawfile';

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
          this.updateProgressBar();

          const formData = new FormData();
  
          formData.append('image', this.formValHolder.petProfileImage);

          return this.reqForms.uploadPetImage(
            `${this.urlRoot}/uploadPetImage`,
            formData
          );
        }),

        retry({ count: 2, delay: 3000 })
      )
      .subscribe({
        next: () => {
          this.cleanUp();
          this.updateProgressBar();
        },
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
}
