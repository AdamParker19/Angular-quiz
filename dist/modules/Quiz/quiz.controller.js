"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initScores = void 0;
const user_model_1 = require("../models/user.model");
exports.initScores = (req, res) => {
    var scores = new user_model_1.User({
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
    scores.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(scores);
        }
    });
};
//# sourceMappingURL=quiz.controller.js.map