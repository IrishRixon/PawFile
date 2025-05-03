import { Injectable } from '@angular/core';
import { SpeeddialItem } from '../../interfaces/speeddial/speeddial';

@Injectable({
  providedIn: 'root'
})
export class SpeeddialItemsService {

  constructor() { }

  items: SpeeddialItem[] = [
    {
      label: 'Show QR code',
      icon: 'pi pi-qrcode',
      command: function (): void {
        console.log("Command called");
      }
    }
  ];

  getItems(): SpeeddialItem[] {
    return this.items;
  }

}
