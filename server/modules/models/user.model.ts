import { Schema, Document, Model, model, Types, } from 'mongoose';
import Db from '../../config/db';

export type User = Document & {
    email: String,
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number,
    total: Number
}

export const UserSchema = new Schema({
    email: String,
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number,
    total: Number
}, {
    collection: 'answers'
});



export const User = Db.connection.model<User>('Answer', UserSchema);
