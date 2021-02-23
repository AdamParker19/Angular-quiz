import { UserAuth } from '../models/auth.model'
import { Request, Response, NextFunction } from "express";
import { User } from '../models/user.model';

const bcrypt = require('bcryptjs');

// Register User
export const addUser = (req: Request, res: Response) => {
    var user = new UserAuth({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    user.save((err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });

};




