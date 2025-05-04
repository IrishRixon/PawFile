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

  visibleDialog() {
    this.toggleDialog.next(true);
  }

  items: SpeeddialItem[] = [
    {
      label: 'Show QR code',
      icon: 'pi pi-qrcode',
      command: () => {
        this.visibleDialog();
      }
    }
  ];

  getItems(): SpeeddialItem[] {
    return this.items;
  }

}
