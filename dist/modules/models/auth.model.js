"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAuth = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../config/db"));
exports.UserSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    collection: 'users'
});
exports.UserAuth = db_1.default.connection.model('User', exports.UserSchema);
//# sourceMappingURL=auth.model.js.map