export interface PetProfileDetails {
    petDetails: PetDetails;
    ownerDetails: Owner;
    medicalDetails: Medical;
}

interface PetDetails {
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

interface Owner {
    profilePic: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    address: Address;
}

interface Medical {
    vetClinicName: string;
    vetClinicPhoneNumber: string;
    vaccination: string;
    allergies: string;
    medications: string;
}

interface Address {
    street: string,
    barangay: string,
    municipality: string,
    province: string
}