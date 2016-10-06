export interface IContact {
    id?: string;
    type: ContactType;
    fullName: string;
    data: any;
    date_create: Date;
}

export enum ContactType {
    A,
    B,
    C
}

export class Contact {
    _items: IContact[] = [];

    constructor() {

    }
}