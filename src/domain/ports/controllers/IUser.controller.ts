import {Request} from 'express';
import {IUser} from "../../entities";

export interface IUserController {
    create(req: Request): Promise<IUser>;

    find(req: Request): Promise<IUser[]>;

    findById(req: Request): Promise<IUser | null>;

    update(req: Request): Promise<IUser | null>;

    delete(req: Request): Promise<void>;
}
