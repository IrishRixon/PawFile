import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FORMSTATE } from '../../enum/formState';
import { User } from '../../../interfaces/authentication';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-create-account',
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
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss',
})
export class CreateAccountComponent {
  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
  ) {}

  createAccountForm!: FormGroup;

  @ViewChild('errormsg') errormsg!: ElementRef;
  @ViewChild('confirmInput') confirmInput!: ElementRef;
  @Output() formState: EventEmitter<FORMSTATE> = new EventEmitter<FORMSTATE>();
  @Output() userCredentials: EventEmitter<User> = new EventEmitter<User>();

  confirmPassValue: string = '';
  isPasswordMatched: boolean = false;
  isBtnEnable!: boolean;

  ngOnInit(): void {
    this.createAccountForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.isBtnEnable = this.createAccountForm.valid && this.isPasswordMatched;
  }

  checkIfPasswordMatch() {
    this.isPasswordMatched =
      this.createAccountForm.get('password')?.value === this.confirmPassValue;
    this.isBtnEnable = this.createAccountForm.valid && this.isPasswordMatched;

    if (!this.isPasswordMatched) {
      this.renderer.addClass(this.errormsg.nativeElement, 'open');
      this.renderer.addClass(this.confirmInput.nativeElement, 'dirty');
    } else {
      this.renderer.removeClass(this.errormsg.nativeElement, 'open');
      this.renderer.removeClass(this.confirmInput.nativeElement, 'dirty');
    }
  }

  onSignUp() {
    this.emitUserCredentials();
    this.emitFormState();
  }

  emitUserCredentials() {
    this.userCredentials.emit(this.createAccountForm.value);
  }

  emitFormState() {
    this.formState.emit(FORMSTATE.EmailVerification);
  }

  ngAfterViewInit(): void {
    this.checkIfPasswordMatch();
  }
}
