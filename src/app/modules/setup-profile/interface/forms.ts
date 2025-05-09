export interface Res {
    message?: string;
    isSuccess?: boolean; 
    _id?: string;
}

export interface Address {
    street: string,
    barangay: string,
    municipality: string,
    province: string
}

export interface UserForm {
    lastname: string,
    firstname: string,
    phoneNumber: number,
    address: Address,
    res?: Res
}

export interface PetForm {
    name: string,
    species: string,
    breed: string,
    age: string,
    color: string,
    temperament: string,
    profilePic: string,
    res?: Res
}