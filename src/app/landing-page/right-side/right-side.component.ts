import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { FORMSTATE } from '../enum/formState';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { User } from '../../interfaces/authentication';

@Component({
  selector: 'app-right-side',
  imports: [
    SignInComponent,
    CreateAccountComponent,
    ForgotPassComponent,
    EmailVerificationComponent
],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {

  constructor(private renderer: Renderer2) {}

  signInformState: FORMSTATE = FORMSTATE.SignIn;
  createAccountformState: FORMSTATE = FORMSTATE.CreateAccount;
  forgotPassformState: FORMSTATE = FORMSTATE.ForgotPassword;
  emailVerification: FORMSTATE = FORMSTATE.EmailVerification;

  formState: FORMSTATE = FORMSTATE.SignIn;
  createdUserCredentials!: User;

  @ViewChild('content') content!: ElementRef;

  removeClasses() {
    this.renderer.removeClass(this.content.nativeElement, 'open-sign-in');
    this.renderer.removeClass(this.content.nativeElement, 'open-create-account');
    this.renderer.removeClass(this.content.nativeElement, 'open-email-verification');
  }

  changeFormStateToSignIn() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.SignIn;
      this.renderer.addClass(this.content.nativeElement, 'open-sign-in');
    }, 500);
  }

  changeFormStateToCreateAccount() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.CreateAccount;
      this.renderer.addClass(this.content.nativeElement, 'open-create-account');
    }, 500);
  }

  changeFormStateToForgotPass(event: FORMSTATE) {
    this.removeClasses();
    setTimeout(() => {
      this.formState = event;
      this.renderer.addClass(this.content.nativeElement, 'open-forgot-pass');
    }, 500);
  }

  changeFormStateToForgotPassTEST() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.ForgotPassword;
      this.renderer.addClass(this.content.nativeElement, 'open-forgot-pass');
    }, 500);
  }

  changeFormStateToEmailVerification() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.EmailVerification;
      this.renderer.addClass(this.content.nativeElement, 'open-email-verification');
    })
  }

  emittedFormState(event: FORMSTATE) {
    this.formState = event;
    this.changeFormStateToEmailVerification();
  }

  emittedUserCredentials(event: User) {
    this.createdUserCredentials = event;
  }

  onIncorrectEmail(event: FORMSTATE) {
    this.changeFormStateToCreateAccount();
  }

  ngAfterViewInit() {
    this.changeFormStateToForgotPassTEST();
    console.log(this.formState);
  }
}
