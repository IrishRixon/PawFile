import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor() {}

  Url: string = "https://res.cloudinary.com/ducdal81b/image/upload/";

  petName: string = "No name";
  profilePicUrl!: string;

  @Input() set name(value: string) {
    if(value) {
      this.petName = value;
    }
  }

  @Input() index!: number;
  @Input() selectedPetIndex!: number;

  @Input() id!: string;

  @Input() set profilePic(value: string) {
    this.profilePicUrl = `${this.Url}${value}`;
  }

  @Output() petSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() indexOut: EventEmitter<number> = new EventEmitter<number>();

  onPetSelected() {
    this.petSelected.emit(this.id);
    this.emitIndex();
  }

  emitIndex() {
    this.indexOut.emit(this.index);
  }
}
