import { Injectable } from '@angular/core';
import { SpeeddialItem } from '../../interfaces/speeddial/speeddial';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeeddialItemsService {
  constructor() { }

  private toggleDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleDialogObs:Observable<boolean> = this.toggleDialog.asObservable();

  private toggleAddDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleAddDialogObs:Observable<boolean> = this.toggleAddDialog.asObservable();

  private toggleDeleteDialog: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toggleDeleteDialogObs:Observable<boolean> = this.toggleDeleteDialog.asObservable();

  visibleDialog() {
    this.toggleDialog.next(true);
  }

  visibleAddDialog(val: boolean) {
    this.toggleAddDialog.next(val);
  }

  visibileDeleteDialog() {
    this.toggleDeleteDialog.next(true);
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
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {

      }
    },
    {
      label: "Add Pet",
      icon: "pi pi-plus",
      command: () => {
        this.visibleAddDialog(true);
      }
    }
  ];

  getItems(): SpeeddialItem[] {
    return this.items;
  }

}
