import { Injectable } from '@angular/core';
import { SpeeddialItem } from '../../interfaces/speeddial/speeddial';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UpdateDetailsFormsService } from '../update-details-forms/update-details-forms.service';
import { SharedServiceService } from '../shared-service/shared-service.service';

@Injectable({
  providedIn: 'root',
})
export class SpeeddialItemsService {
  constructor(private updateDetailsFormsService: UpdateDetailsFormsService, private SSService: SharedServiceService, private messageService: MessageService) { }

  private toggleDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleDialogObs: Observable<boolean> = this.toggleDialog.asObservable();

  private toggleAddDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleAddDialogObs: Observable<boolean> = this.toggleAddDialog.asObservable();

  private isPetMissing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isPetMissingObs: Observable<boolean> = this.isPetMissing.asObservable();

  // isPetMissing: boolean = false;
  _id: string = '';

  urlRoot: string = 'https://pawfile-server.onrender.com';

  visibleDialog() {
    this.toggleDialog.next(true);
  }

  visibleAddDialog(val: boolean) {
    this.toggleAddDialog.next(val);
  }

  toggleIsPetMissing(val: boolean) {
    this.isPetMissing.next(val);
  }

  items: SpeeddialItem[] = [
    {
      label: 'Show QR code',
      icon: 'pi pi-qrcode',
      command: () => {
        this.visibleDialog();
      }
    },
    {
      label: "Add Pet",
      icon: "pi pi-plus",
      command: () => {
        this.visibleAddDialog(true);
      }
    },
    {
      label: "Toggle Missing Pet",
      icon: "pi pi-exclamation-circle",
      command: () => {
        if (this._id == '') {
          console.log('service');
          this.messageService.add({ severity: 'error', summary: 'Select a Pet', detail: 'Please select a pet first.', life: 3000 });
        }
        else {
          const newVal = !this.isPetMissing.value;
          this.updateDetailsFormsService.updateMissing(`${this.urlRoot}/dashboard/updateMissing`, { isMissing: !this.isPetMissing.value, _id: this._id })
            .subscribe({
              next: (res) => {
                this.toggleIsPetMissing(res.isMissing);
              },
              error: (err) => {
                console.log(err);
              }
            });
        }
      }
    }
  ];

  getItems(): SpeeddialItem[] {
    return this.items;
  }

}
