import { Component, EventEmitter, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FORMSTATE } from '../../enum/formState';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { UserEmail } from '../../../interfaces/authentication';
import { ToastMessage } from '../../../interfaces/toast-message';


@Component({
  selector: 'app-forgot-pass',
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.scss',
})
export class ForgotPassComponent {
  constructor(
    private authenticationService: AuthenticationService,

    private formBuilder: FormBuilder
  ) {}

  urlRoot: string = 'http://localhost:3000/pawfile';
  forgotPassForm!: FormGroup;

  @Output() signinFormState: EventEmitter<FORMSTATE> =
    new EventEmitter<FORMSTATE>();
  @Output() newPassFormState: EventEmitter<FORMSTATE> =
    new EventEmitter<FORMSTATE>(); 
  @Output() toastMessage: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>;

  emitSigninFormState() {
    this.signinFormState.emit(FORMSTATE.SignIn);
  }

  onProceed() {
    const value: UserEmail = {
      email: this.forgotPassForm.get('email')?.value,
    };
    console.log(value);

    this.authenticationService
      .findAccount(`${this.urlRoot}/findaccount`, value)
      .subscribe((response) => {
        if (response.res?.isSuccess) {
          const successToast: ToastMessage = {
            summary: 'Found',
            detail: 'Account Found',
            severity: 'success'
          }
          this.emitToastMessage(successToast);
          this.emitNewPassFormState();
        } else {
          const errorToast: ToastMessage = {
            summary: 'Not Found',
            detail: 'Account not found',
            severity: 'error'
          }
          this.emitToastMessage(errorToast);
        }
      });
  }

  emitNewPassFormState() {
    this.newPassFormState.emit(FORMSTATE.NewPassword);
  }

  emitToastMessage(toastMessage: ToastMessage) {
    this.toastMessage.emit(toastMessage)
  }

  ngOnInit() {
    this.forgotPassForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
