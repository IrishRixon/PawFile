import { Component } from '@angular/core';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';

@Component({
  selector: 'app-carousel',
  standalone: false,

  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  constructor(private SSService: SharedServiceService) {}

  petImages: string[] = [];

  visible: boolean = false;

  responsiveOptions: any[] | undefined;
  
  onBasicUploadAuto(event: any) {

  }

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe( val => {
      this.petImages = val.petDetails.images;
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
