import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SignInComponent } from "./sign-in/sign-in.component";
import { CreateAccountComponent } from "./create-account/create-account.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { FORMSTATE } from '../enum/formState';

@Component({
  selector: 'app-right-side',
  imports: [
    SignInComponent,
    CreateAccountComponent,
    ForgotPassComponent
],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.scss'
})
export class RightSideComponent {

  constructor(private renderer: Renderer2) {}

  signInformState: FORMSTATE = FORMSTATE.SignIn;
  createAccountformState: FORMSTATE = FORMSTATE.CreateAccount;
  forgotPassformState: FORMSTATE = FORMSTATE.ForgotPassword;

  formState: FORMSTATE = FORMSTATE.SignIn;

  @ViewChild('content') content!: ElementRef;

  removeClasses() {
    this.renderer.removeClass(this.content.nativeElement, 'open-sign-in');
    this.renderer.removeClass(this.content.nativeElement, 'open-create-account')
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
    this.formState = event;
  }

  ngAfterViewInit() {
    this.changeFormStateToSignIn();
  }
}
