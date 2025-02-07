import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FORMSTATE } from '../../enum/formState';

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
    PasswordModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  @Output() forgotFormState: EventEmitter<FORMSTATE> = new EventEmitter<FORMSTATE>();

  value: string = "";
  value1: string = "";

  forgotFormStateEmit() {
    this.forgotFormState.emit(FORMSTATE.ForgotPassword)
  }
}
