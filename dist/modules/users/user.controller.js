"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsers = void 0;
const user_model_1 = require("../models/user.model");
// FETCH all Users
exports.allUsers = (req, res) => {
    let users = user_model_1.User.find((err, users) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(users);
        }
    });
};
//# sourceMappingURL=user.controller.js.map