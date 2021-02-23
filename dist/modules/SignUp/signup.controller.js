"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const auth_model_1 = require("../models/auth.model");
const bcrypt = require('bcryptjs');
// Register User
exports.addUser = (req, res) => {
    var user = new auth_model_1.UserAuth({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    user.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(user);
        }
    });
};
//# sourceMappingURL=signup.controller.js.map