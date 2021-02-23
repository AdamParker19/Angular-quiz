import { Schema, Document, Model, model, Types, } from 'mongoose';
import Db from '../../config/db';


export type Question = Document & {
    _id: string;
    question: string;
    difficulty: string;
    options: string[]
    answer: string;
}


export const questionSchema = new Schema({
    service: String,
    question: String,
    difficulty: String,
    options: [String],
    answer: String
  },
  {
      timestamps: true,
      collection: 'questions'
  });


  export const Question = Db.connection.model<Question>('Question', questionSchema);

