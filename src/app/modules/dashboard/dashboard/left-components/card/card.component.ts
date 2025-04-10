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

  petName: string = "No name";
  profilePicUrl!: string;

  @Input() set name(value: string) {
    if(value) {
      this.petName = value;
    }
  }

  @Input() set profilePic(value: string) {
    this.profilePicUrl = `${this.Url}${value}`;
  }

}
