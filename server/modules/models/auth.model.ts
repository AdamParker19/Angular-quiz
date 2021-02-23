import { Schema, Document, Model, model, Types, } from 'mongoose';
import Db from '../../config/db';

export type user = Document & {
    email: String,
    password: String
}

export const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    collection: 'users'
});

export const UserAuth = Db.connection.model<user>('User', UserSchema);
