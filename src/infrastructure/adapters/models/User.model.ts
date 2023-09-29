import {model, Schema} from 'mongoose';
import {IUser} from "../../../domain";


const UserSchema = new Schema({
    name: String,
    email: String,
});

export const UserModel = model<IUser>('User', UserSchema);
