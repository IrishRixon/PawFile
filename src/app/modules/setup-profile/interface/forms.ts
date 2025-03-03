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
    address: Address
}

export interface PetForm {
    name: string,
    species: string,
    breed: string,
    age: number,
    color: string,
    temperament: string
}