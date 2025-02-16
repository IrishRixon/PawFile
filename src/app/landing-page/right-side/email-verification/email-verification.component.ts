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

  ngAfterViewInit(): void {
    this.sendEmailVerification();
  }
}
