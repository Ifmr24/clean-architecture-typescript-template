import {Request} from 'express'
import {IUser, IUserController, IUserService} from "../../../domain";

export class UserController implements IUserController {
    constructor(private readonly userService: IUserService) {
    }

    public async find(req: Request): Promise<IUser[]> {
        const filters = {
            ...req.params
        }
        return this.userService.find(filters)
    }

    public async findById(req: Request): Promise<IUser | null> {
        const id = req.params.id
        return this.userService.findById(id)
    }

    public async create(req: Request): Promise<IUser> {
        const user = req.body
        return this.userService.create(user)
    }

    public async delete(req: Request): Promise<void> {
        const id = req.params.id
        return this.userService.delete(id)
    }

    public async update(req: Request): Promise<IUser | null> {
        const user = req.body
        return this.userService.update(user)
    }
}
