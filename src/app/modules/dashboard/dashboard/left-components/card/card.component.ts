import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor() {}

  Url: string = "https://res.cloudinary.com/ducdal81b/image/upload/v1743384513/";
  profilePicUrl!: string;

  @Input() name!: string;
  @Input() set profilePic(value: string) {
    this.profilePicUrl = `${this.Url}${value}`;
  }

  petName: string = "dog";
}
