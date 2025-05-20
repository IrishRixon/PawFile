import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Code, User } from '../../../interfaces/authentication';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { FORMSTATE } from '../../enum/formState';
import { finalize } from 'rxjs';
import { ToastMessage } from '../../../interfaces/toast-message';

@Component({
  selector: 'app-email-verification',
  imports: [InputOtp, FormsModule, ButtonModule],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss',
  standalone: true,
})
export class EmailVerificationComponent {
  constructor(private authenticationService: AuthenticationService) {}

  @Input() userCredentials!: User;
  @Output() incorrectEmail: EventEmitter<FORMSTATE> = new EventEmitter<FORMSTATE>();
  @Output() message: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>();

  code: string = '';
  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';
  resendCountdown: number = 120;
  isResendCountdownActive: boolean = false;

  isLoading: boolean = false;

  sendEmailVerification() {
    this.authenticationService
      .emailVerification(`${this.urlRoot}/emailverif`, this.userCredentials)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onCodeSubmit() {
    this.isLoading = true;

    const codeObj: Code = {
      code: this.code
    }

    this.authenticationService
      .codeVerification(`${this.urlRoot}/verifcode`, codeObj)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe( res => {
        if(res.isMatch) {
          this.authenticationService.signIn(`${this.urlRoot}/signup`, this.userCredentials)
          .subscribe( res => {
            console.log(res);
          })
        }
        else if(res.codeExpired) {
          const mess: ToastMessage = {
            severity: 'error',
            summary: 'Code Expired',
            detail: 'The code you entered has expired. Please request a new one.'
          }

          this.emitMessage(mess);
        }
      });
  }

  
  resendEmailVerification() {
    this.isResendCountdownActive = true;
    this.sendEmailVerification();

    const intervalID = setInterval(() => {
      console.log(this.resendCountdown, 'resendCountdow');
      console.log(this.isResendCountdownActive, 'isResendCountdownActive');

      this.resendCountdown--;

        if(!this.resendCountdown) {
          this.isResendCountdownActive = false;
          this.resendCountdown = 120;
          clearInterval(intervalID)
        }
    }, 1000)
  }

  emitIncorrectEmail() {
    this.incorrectEmail.emit(FORMSTATE.EmailVerification)
  }

  emitMessage(mess: ToastMessage) {
    this.message.emit(mess);
  }

  ngAfterViewInit(): void {
    this.sendEmailVerification();
  }
}
