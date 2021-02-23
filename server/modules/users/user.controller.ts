import { User } from '../models/user.model'
import { Request, Response } from "express";

// FETCH all Users
export let allUsers = (req: Request, res: Response) => {
    let users = User.find((err: any, users: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(users);
        }
    });
};

