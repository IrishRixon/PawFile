import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-message',
  standalone: false,
  
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor(private formBuilder: FormBuilder) {}

  message!: FormGroup;

  ngOnInit(): void {
    this.message = this.formBuilder.group({
      text: [''],
    })
  }
}
