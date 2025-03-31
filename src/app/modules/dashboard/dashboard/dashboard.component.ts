import { Component } from '@angular/core';
import { GetPetsCardService } from '../services/get-petscard/get-petscard.service';
import { PetCards } from '../interfaces/petcards/petcard';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private getPetsCardAPI: GetPetsCardService) {}

  urlRoot: string = 'http://localhost:3000/pawfile';

  petCards!: PetCards;

  ngOnInit(): void {
    this.getPetsCardAPI.getPetsCard(`${this.urlRoot}/getPetsCard`)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.petCards = res;
      }
    })
  }
}
