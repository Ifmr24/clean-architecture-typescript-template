import {IUser} from "../../entities";

export interface IUserRepository {
    create(user: IUser): Promise<IUser>;

    update(user: IUser): Promise<IUser | null>;

    delete(id: string): Promise<void>;

    findById(id: string): Promise<IUser | null>;

    find(filter: any): Promise<IUser[]>;
}
