"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = void 0;
const auth_model_1 = require("../models/auth.model");
const config = require("../../config/auth.config");
var jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
// Login User
exports.checkUser = (req, res) => {
    auth_model_1.UserAuth.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (passwordIsValid) {
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            return res.status(200).send({ id: user.id, email: user.email, accessToken: token });
        }
        else {
            return res.status(404).send({ message: "Invalid password" });
        }
    });
};
//# sourceMappingURL=signin.controller.js.map