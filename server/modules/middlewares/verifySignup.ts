import { UserAuth } from '../models/auth.model'
import { Request, Response, NextFunction } from "express";

export const checkDuplicateEmail = (req: Request, res: any, next: NextFunction) => {

    UserAuth.findOne({
        email: req.body.email
    }).exec((err: any, user: any) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(404).send({ message: "Failed! email is already in use!" });
            return;
        }
        next();

    });
};