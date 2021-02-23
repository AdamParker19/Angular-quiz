import { Request, Response } from "express";
import { User } from '../models/user.model';
import { ScoreCard } from '../models/quiz.model'
export const initScores = (req: Request, res: Response) => {
    var scores = new User({
        email: req.body.email,
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
        q7: 0,
        q8: 0,
        q9: 0,
        q10: 0,
        total: 0
    });

    scores.save((err: any) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(scores);
        }
    });

}

export const updateScores = (req: Request, res: Response) => {

    let id = req.body.id;
    let q = req.body.question;

    ScoreCard.findByIdAndUpdate(id, { $inc: { "total": 1 } })

}