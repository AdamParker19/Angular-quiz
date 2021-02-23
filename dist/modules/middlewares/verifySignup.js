"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDuplicateEmail = void 0;
const auth_model_1 = require("../models/auth.model");
exports.checkDuplicateEmail = (req, res, next) => {
    auth_model_1.UserAuth.findOne({
        email: req.body.email
    }).exec((err, user) => {
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
//# sourceMappingURL=verifySignup.js.map