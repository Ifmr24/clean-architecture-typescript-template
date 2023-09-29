import {IUser, IUserRepository} from "../../../domain";
import {IMongooseModels} from "../models";

export class UserRepository implements IUserRepository {

    constructor(
        private readonly mongooseModels: IMongooseModels
    ) {
    }

    public async find(): Promise<IUser[]> {
        return this.mongooseModels.User.find()
    }

    public async findById(id: string): Promise<IUser | null> {
        return this.mongooseModels.User.findById(id)
    }

    public async create(user: IUser): Promise<IUser> {
        return this.mongooseModels.User.create(user)
    }

    public async delete(id: string): Promise<void> {
        await this.mongooseModels.User.findByIdAndDelete(id)
    }

    public async update(user: IUser): Promise<IUser | null> {
        return this.mongooseModels.User.findByIdAndUpdate(user._id, user)
    }
}

