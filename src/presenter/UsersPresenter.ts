import { IUser } from '@entities';
import moment from 'moment-timezone';

export class UsersPresenter {
    public getAll(users: IUser[]) {
        users.map((user: any) => {
            user.createdAt = moment(user.createdAt as moment.Moment).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss');
        });
        return users;
    }
}
