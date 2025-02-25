import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { FORMSTATE } from '../enum/formState';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { User, UserEmail } from '../../interfaces/authentication';
import { NewPassComponent } from './new-pass/new-pass.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastMessage } from '../../interfaces/toast-message';

@Component({
  selector: 'app-right-side',
  imports: [
    SignInComponent,
    CreateAccountComponent,
    ForgotPassComponent,
    EmailVerificationComponent,
    NewPassComponent,
    ToastModule,
],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss',
  providers: [MessageService]
})
export class RightSideComponent {

  constructor(
    private renderer: Renderer2,
    private messageService: MessageService,
  ) {}

  signInformState: FORMSTATE = FORMSTATE.SignIn;
  createAccountformState: FORMSTATE = FORMSTATE.CreateAccount;
  forgotPassformState: FORMSTATE = FORMSTATE.ForgotPassword;
  emailVerification: FORMSTATE = FORMSTATE.EmailVerification;
  newPassformState: FORMSTATE = FORMSTATE.NewPassword; 

  formState: FORMSTATE = FORMSTATE.SignIn;
  createdUserCredentials!: User;

  userEmail!: UserEmail;


  @ViewChild('content') content!: ElementRef;

  removeClasses() {
    this.renderer.removeClass(this.content.nativeElement, 'open-sign-in');
    this.renderer.removeClass(this.content.nativeElement, 'open-create-account');
    this.renderer.removeClass(this.content.nativeElement, 'open-email-verification');
    this.renderer.removeClass(this.content.nativeElement, 'open-forgot-pass');
    this.renderer.removeClass(this.content.nativeElement, 'open-new-pass');
    this.renderer.removeClass(this.content.nativeElement, 'overflow-visible');
  }

  changeFormStateToSignIn() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.SignIn;
      this.renderer.addClass(this.content.nativeElement, 'open-sign-in');
    }, 1100);
  }

  changeFormStateToCreateAccount() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.CreateAccount;
      this.renderer.addClass(this.content.nativeElement, 'open-create-account');
    }, 1100);
  }

  changeFormStateToForgotPass() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.ForgotPassword;
      this.renderer.addClass(this.content.nativeElement, 'open-forgot-pass');
    }, 1100);
  }

  changeFormStateToEmailVerification() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.EmailVerification;
      this.renderer.addClass(this.content.nativeElement, 'open-email-verification');
    }, 1100)
  }

  changeFormStateToNewpass() {
    this.removeClasses();
    setTimeout(() => {
      this.formState = FORMSTATE.NewPassword;
      this.renderer.addClass(this.content.nativeElement, 'open-new-pass');
    }, 1100)

    setTimeout(() => {
      this.renderer.addClass(this.content.nativeElement, '!overflow-visible');
    }, 2100)
  }

  emittedFormState(event: FORMSTATE) {
    this.formState = event;
    this.changeFormStateToEmailVerification();
  }

  emittedUserCredentials(event: User) {
    this.createdUserCredentials = event;
  }

  emittedUserEmail(event: UserEmail) {
    this.userEmail = event;
  }

  onForgotPassClicked(event: FORMSTATE) {
    this.changeFormStateToForgotPass();
  }

  onIncorrectEmailClicked(event: FORMSTATE) {
    this.changeFormStateToCreateAccount();
  }

  onBackToSigninClicked(event: FORMSTATE) {
    this.changeFormStateToSignIn();
  }

  onNewPass(event: FORMSTATE) {
    this.changeFormStateToNewpass();
  }

  showMessage(event: ToastMessage) {
    this.messageService.add({
      severity: event.severity,
      summary: event.summary,
      detail: event.detail,
      life: 3000,
    });
  }

  ngAfterViewInit() {
    this.changeFormStateToSignIn();
    console.log(this.formState);
  }
}
