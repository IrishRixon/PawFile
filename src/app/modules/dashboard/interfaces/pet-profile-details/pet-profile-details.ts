export interface PetProfileDetails {
    petDetails: PetDetails;
    ownerDetails: Owner;
    medicalDetails: Medical;
}

export interface PetDetails {
    _id: string;
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
}

export interface Owner {
    profilePic: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    address: Address;
}

export interface Medical {
    vetClinicName: string;
    vetClinicPhoneNumber: string;
    vaccination: string;
    allergies: string;
    medications: string;
}

export interface Address {
    street: string,
    barangay: string,
    municipality: string,
    province: string
}

export interface PetDetailsForm {
    name: string;
    species: string;
    breed: string;
    age: number;
    color: string;
    temperament: string;
    gender: string,
}

export interface MedicalDetailsForm {
    name: string;
    vetClinicName: string;
    vetClinicPhoneNumber: string;
    vaccination: string;
    allergies: string;
    medications: string;
}

export interface OwnerDetailsForm {
    phoneNumber: string;
    profilePic: string;
    address: {
        street: string,
        barangay: string,
        municipality: string,
        province: string
    }
}

export interface MessageDetailsForm {
    name: string;
    message: string;
}

export interface NameForm {
    prevName: string,
    newName: string
}