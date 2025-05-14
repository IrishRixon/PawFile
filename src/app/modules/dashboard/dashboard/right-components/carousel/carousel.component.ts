import { Component } from '@angular/core';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-carousel',
  standalone: false,

  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [ConfirmationService]
})
export class CarouselComponent {
  constructor(private SSService: SharedServiceService, private confirmationService: ConfirmationService) {}

  petImages: string[] = [];

  visible: boolean = false;

  responsiveOptions: any[] | undefined;
  
  onBasicUploadAuto(event: any) {

  }

  deleteConfirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        rejectButtonProps: {
            label: 'Cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptButtonProps: {
            label: 'Delete',
            severity: 'danger'
        },
        accept: () => {
            
        },
        reject: () => {

        }
    });
}

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe( val => {
      val.petDetails.images.forEach( image => {
        this.petImages.push(`https://res.cloudinary.com/ducdal81b/image/upload/${image}`);
      });
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
