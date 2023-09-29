import {IUser, IUserRepository, IUserService} from "../../domain";

export class UserService implements IUserService {

    constructor(private readonly userRepository: IUserRepository) {
    }

    async find(filters: any): Promise<IUser[]> {
        return this.userRepository.find(filters)
    }

    async findById(id: string): Promise<IUser | null> {
        return this.userRepository.findById(id)
    }

    async create(user: IUser): Promise<IUser> {
        return this.userRepository.create(user)
    }

    async delete(id: string): Promise<void> {
        return this.userRepository.delete(id)
    }

    async update(user: IUser): Promise<IUser | null> {
        return this.userRepository.update(user)
    }
}
