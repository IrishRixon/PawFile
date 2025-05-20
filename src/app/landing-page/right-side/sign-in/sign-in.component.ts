import { Component, EventEmitter, inject, Injectable, Output } from '@angular/core';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FORMSTATE } from '../../enum/formState';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../services/api-service.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { ToastMessage } from '../../../interfaces/toast-message';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  imports: [
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    InputGroupModule,
    InputNumberModule,
    InputGroupAddonModule,
    ButtonModule,
    RippleModule,
    PasswordModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  standalone: true,
  providers: [FormBuilder]
})
export class SignInComponent {
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: Router
  ) {}
  
  @Output() forgotFormState: EventEmitter<FORMSTATE> = new EventEmitter<FORMSTATE>();
  @Output() message: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>();

  urlRoot: string = 'https://pawfile-server.onrender.com';
  signInForm!: FormGroup;

  isLoading: boolean = false;

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  forgotFormStateEmit() {
    this.forgotFormState.emit(FORMSTATE.ForgotPassword)
  }

  onSubmit() {
    this.isLoading = true;
    
    this.authenticationService.signIn(`${this.urlRoot}/signin`, this.signInForm.value)
    .pipe(
      finalize(() => this.isLoading = false)
    )
    .subscribe( res => {
      if(res.res?.isSuccess) {
        this.route.navigate(['dashboard']);
      }
      else {
        const mess: ToastMessage = {
          summary: 'Incorrect Credentials',
          detail: 'Please check your credentials',
          severity: 'error'
        }

        this.emitMessage(mess);
      }
    })
  }

  emitMessage(message: ToastMessage) {
    this.message.emit(message)
  }
}
