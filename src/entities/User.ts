import moment from 'moment-timezone';

export interface IUser {
    id?: number;
    name: string;
    email: string;
    createdAt?: moment.Moment;
    updatedAt?: moment.Moment;
    deletedAt?: moment.Moment;
}

export class User implements IUser {

    public id?: number;
    public name: string;
    public email: string;
    public createdAt?: moment.Moment;
    public updatedAt?: moment.Moment;
    public deletedAt?: moment.Moment;

    constructor(nameOrUser: string | IUser, email?: string) {
        if (typeof nameOrUser === 'string') {
            this.name = nameOrUser;
            this.email = email || '';
        } else {
            this.name = nameOrUser.name;
            this.email = nameOrUser.email;
        }
    }
}
