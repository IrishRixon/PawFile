import { Component, EventEmitter, Output } from '@angular/core';
import { SharedServiceService } from '../../../services/shared-service/shared-service.service';
import { ConfirmationService } from 'primeng/api';
import { UpdateDetailsFormsService } from '../../../services/update-details-forms/update-details-forms.service';
import { ToastMessage } from '../../../interfaces/toast-message/toast-message';
import { GlobalVarService } from '../../../../../services/globalVar/global-var.service';

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
    private updateDetailsFormsService: UpdateDetailsFormsService,
    private globalVar: GlobalVarService
  ) { }

  @Output() toastMessage: EventEmitter<ToastMessage> = new EventEmitter<ToastMessage>();
  @Output() clearToastMessage: EventEmitter<void> = new EventEmitter<void>();

  _id!: string;

  petImages: string[] = [];
  urlRoot: string = 'https://pawfile-server.onrender.com/pawfile';

  visible: boolean = false;

  responsiveOptions: any[] | undefined;

  file!: File;

  emitToastMessage() {
    const toast: ToastMessage = {
      severity: 'info',
      summary: 'Uploading',
      detail: 'Your image is now uploading',
      life: 0,
      sticky: true,
      icon: "pi pi-spin pi-spinner"
    };

    this.toastMessage.emit(toast);
  }

  emitSuccessfulToastMessage(summary: string, detail: string) {
    const toast: ToastMessage = {
      severity: 'success',
      summary: summary,
      detail: detail,
      life: 3000,
      sticky: false,
    };

    this.toastMessage.emit(toast);
  }

  emitDeletingToastMessage() {
    const toast: ToastMessage = {
      severity: 'info',
      summary: 'Deleting',
      detail: 'Deleting image',
      life: 0,
      sticky: true,
      icon: "pi pi-spin pi-spinner"
    };

    this.toastMessage.emit(toast);
  }

  onBasicUploadAuto(event: any) {
    this.file = event.currentFiles[0];
    const formData: FormData = new FormData();

    formData.append('image', this.file);
    formData.append('_id', this._id);

    this.emitToastMessage();

    this.updateDetailsFormsService.postCarouselImage(`${this.urlRoot}/dashboard/carouselImage`, formData)
      .subscribe({
        next: (res) => {
          this.petImages = [];
          res.images.forEach(image => {
            this.petImages.push(`https://res.cloudinary.com/ducdal81b/image/upload/${image}`);
          });

          this.clearToastMessage.emit();
          this.emitSuccessfulToastMessage('Uploaded', 'Your image has been uploaded successfully');
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  deleteConfirm(event: Event, index: number) {
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
      accept: () => {
        this.emitDeletingToastMessage();

        const item = this.petImages[index];
        this.updateDetailsFormsService.delete(`${this.urlRoot}/dashboard/deleteCarouselImage/${this._id}/${index}`)
          .subscribe({
            next: (res) => {
              this.petImages.splice(index, 1);
              this.clearToastMessage.emit();
              this.emitSuccessfulToastMessage('Deleted', 'Your image has been deleted successfully');
            },
            error: (error) => {
              console.log(error);
            }
          })
      },
      reject: () => { },
    });
  }

  ngOnInit(): void {
    this.urlRoot = this.globalVar.urlRoot;
    
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
