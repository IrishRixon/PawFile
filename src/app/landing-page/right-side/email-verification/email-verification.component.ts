import { Component, Input } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Code, User } from '../../../interfaces/authentication';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

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

  code: string = '';
  urlRoot: string = 'http://localhost:3000/pawfile';
  resendCountdown: number = 120;
  isResendCountdownActive: boolean = false;

  sendEmailVerification() {
    this.authenticationService
      .emailVerification(`${this.urlRoot}/emailverif`, this.userCredentials)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onCodeSubmit() {
    const codeObj: Code = {
      code: this.code
    }

    this.authenticationService
      .codeVerification(`${this.urlRoot}/verifcode`, codeObj)
      .subscribe( res => {
        if(res.isMatch) {
          this.authenticationService.signIn(`${this.urlRoot}/signup`, this.userCredentials)
          .subscribe( res => {
            console.log(res);
          })
        }
      });
  }

  
  resendEmailVerification() {
    console.log('Hello');
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

  ngAfterViewInit(): void {
    this.sendEmailVerification();
  }
}
