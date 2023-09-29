import {IUser} from "../entities";

export interface IUserService {
    find(filters: any): Promise<IUser[]>;

    findById(id: string): Promise<IUser | null>;

    create(user: IUser): Promise<IUser>;

    delete(id: string): Promise<void>;

    update(user: IUser): Promise<IUser | null>;

}
