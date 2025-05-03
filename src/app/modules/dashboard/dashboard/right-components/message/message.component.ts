import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-message',
  standalone: false,
  
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  constructor(private formBuilder: FormBuilder, private SSService: SharedServiceService) {}

  message!: FormGroup;

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe(val => {
      this.message = this.formBuilder.group({
        text: `${val.petDetails.message}`,
      })
    })
    
  }
}
