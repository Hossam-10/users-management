export type Coordinates = {
    lat: number;
    lng: number;
}

export type Address = {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
}

export type Hair = {
    color: string;
    type: string;
}

export type BankDetails = {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export type Company = {
    department: string;
    name: string;
    title: string;
    address: Address;
}

export type CryptoDetails = {
    coin: string;
    wallet: string; // Blockchain address
    network: string;
}

export type Role = 'admin' | 'moderator' | 'user';

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: 'male' | 'female';
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image?: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: BankDetails;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: CryptoDetails;
    role: Role;
    status?: string;
}

export type UsersRequest = {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}
