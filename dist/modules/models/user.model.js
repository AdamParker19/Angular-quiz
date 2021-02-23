"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../config/db"));
exports.UserSchema = new mongoose_1.Schema({
    email: String,
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number,
    total: Number
}, {
    collection: 'answers'
});
exports.User = db_1.default.connection.model('Answer', exports.UserSchema);
//# sourceMappingURL=user.model.js.map