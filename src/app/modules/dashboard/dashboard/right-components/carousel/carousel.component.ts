import { Component } from '@angular/core';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { ConfirmationService } from 'primeng/api';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';

@Component({
  selector: 'app-carousel',
  standalone: false,

  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  providers: [ConfirmationService],
})
export class CarouselComponent {
  constructor(
    private SSService: SharedServiceService,
    private confirmationService: ConfirmationService,
    private updateDetailsFormsService: UpdateDetailsFormsService
  ) {}

  _id!: string;

  petImages: string[] = [];
  urlRoot: string = 'http://localhost:3000/pawfile';

  visible: boolean = false;

  responsiveOptions: any[] | undefined;

  file!: File;

  onBasicUploadAuto(event: any) {
    this.file = event.currentFiles[0];
    const formData: FormData = new FormData();

    formData.append('image', this.file);
    formData.append('_id', this._id);

    this.updateDetailsFormsService.postCarouselImage(`${this.urlRoot}/dashboard/carouselImage`, formData)
    .subscribe({
      next: (res) => {
        this.petImages = [];
        res.images.forEach( image => {
          this.petImages.push(`https://res.cloudinary.com/ducdal81b/image/upload/${image}`);
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  deleteConfirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },
      accept: () => {},
      reject: () => {},
    });
  }

  ngOnInit(): void {
    this.SSService.petProfileDetailsObs.subscribe((val) => {
      this._id = val.petDetails._id;
      val.petDetails.images.forEach((image) => {
        this.petImages.push(
          `https://res.cloudinary.com/ducdal81b/image/upload/${image}`
        );
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
