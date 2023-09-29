import {UserModel} from './User.model'


export interface IMongooseModels {
    User: typeof UserModel
}

export const mongooseModels: IMongooseModels = {
    User: UserModel
}
