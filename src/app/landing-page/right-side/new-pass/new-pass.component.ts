import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-new-pass',
  imports: [
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    PasswordModule,
    DividerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './new-pass.component.html',
  styleUrl: './new-pass.component.scss'
})
export class NewPassComponent {
  value2: string = "";
}
