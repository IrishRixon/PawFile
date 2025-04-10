import { Injectable } from '@angular/core';
import { PetImage } from '../../interfaces/pet-images/pet-images';

@Injectable({
  providedIn: 'root'
})
export class PetImagesService {

  constructor() { }

  petImages: PetImage[] = [
    {
      imageUrl: 'https://res.cloudinary.com/ducdal81b/image/upload/v1744258492/Pet_Profile_Picture/67f745b9da0b0b551f639ba5.jpg'
    },
    {
      imageUrl: 'https://res.cloudinary.com/ducdal81b/image/upload/v1744258492/Pet_Profile_Picture/67f745b9da0b0b551f639ba5.jpg'
    },
    {
      imageUrl: 'https://res.cloudinary.com/ducdal81b/image/upload/v1744258492/Pet_Profile_Picture/67f745b9da0b0b551f639ba5.jpg'
    },
    {
      imageUrl: 'https://res.cloudinary.com/ducdal81b/image/upload/v1744258492/Pet_Profile_Picture/67f745b9da0b0b551f639ba5.jpg'
    },
    {
      imageUrl: 'https://res.cloudinary.com/ducdal81b/image/upload/v1744258492/Pet_Profile_Picture/67f745b9da0b0b551f639ba5.jpg'
    },
  ] 

  getPetImages(): Promise<PetImage[]> {
    return new Promise((resolve) => {
      resolve(this.petImages)
    })
  }
}
