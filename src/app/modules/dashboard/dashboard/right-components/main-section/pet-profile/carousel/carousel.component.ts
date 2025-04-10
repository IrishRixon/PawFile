import { Component } from '@angular/core';
import { PetImagesService } from '../../../../../services/pet-images/pet-images.service';
import { PetImage } from '../../../../../interfaces/pet-images/pet-images';

@Component({
  selector: 'app-carousel',
  standalone: false,

  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  constructor(private petImagesService: PetImagesService) {}

  petImages!: PetImage[];

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.petImagesService.getPetImages().then((petImages) => {
      this.petImages = petImages;
    });

    console.log(this.petImages);

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
