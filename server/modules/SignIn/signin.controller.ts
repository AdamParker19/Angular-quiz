import { UserAuth } from '../models/auth.model'
import { Request, Response } from "express";
const config = require("../../config/auth.config");

var jwt = require("jsonwebtoken");

const bcrypt = require('bcryptjs')
// Login User
export const checkUser = (req: Request, res: Response) => {
    UserAuth.findOne({
        email: req.body.email
    }).exec((err: any, user: any) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (passwordIsValid) {
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // expires in 1 day
            })

            return res.status(200).send({ id: user.id, email: user.email, accessToken: token });
        }
        else {
            return res.status(404).send({ message: "Invalid password" });
        }



    });

};

