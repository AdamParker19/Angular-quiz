import { Request, Response, response } from 'express';
import { Question, questionSchema } from '../models/question.model';
import { environment } from '../../environment';
import * as request from 'request-promise';
import * as fs from 'fs';
import path from 'path';
import * as util from 'util';
const reader = util.promisify(fs.readFile);

const loadQuestions = async () => {
    const questions = await reader(path.resolve('./server/data/questions.json'), 'utf8');
    return JSON.parse(questions);
}

export const getQuestions = async (req: Request, res: Response) => {

    const questions = await loadQuestions();
    return res.json(questions);
}

