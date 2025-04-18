export interface PetProfileDetails {
    owner: string;
    message: string;
    name: string;
    species: string;
    breed: string;
    age: number;
    color: string;
    temperament: string;
    gender: string,
    profilePic: string;
    images: string[];
    ownerDetails: Owner;
    medicalDetails: Medical;
}

interface Owner {
    profilePic: string;
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
}

interface Medical {
    vetClinicName: string;
    vetClinicPhoneNumber: string;
    vaccination: string;
    allergies: string;
    medications: string;
}