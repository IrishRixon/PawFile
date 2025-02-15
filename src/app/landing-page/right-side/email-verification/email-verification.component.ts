import { Component } from '@angular/core';
import { InputOtp } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-email-verification',
  imports: [InputOtp, FormsModule, ButtonModule],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent {
  value: string = '';
}
