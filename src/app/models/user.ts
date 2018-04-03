export interface IUser {
    name: string;
    lastName: string;
    group: string;
}

export class User implements IUser {
    constructor(
        public name: string,
        public lastName: string,
        public group: string,
    ) {}
}
