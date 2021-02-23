import { Schema, Document, Model, model, Types, } from 'mongoose';
import Db from '../../config/db';

export type User = Document & {
    email: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String,
    total: Number
}

export const ScoreSchema = new Schema({
    _id: { type: String },
}, {
    collection: 'answers'
});

export const ScoreCard = Db.connection.model<User>('Answer', ScoreSchema);
