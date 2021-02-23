"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = exports.questionSchema = void 0;
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../config/db"));
exports.questionSchema = new mongoose_1.Schema({
    service: String,
    question: String,
    difficulty: String,
    options: [String],
    answer: String
}, {
    timestamps: true,
    collection: 'questions'
});
exports.Question = db_1.default.connection.model('Question', exports.questionSchema);
//# sourceMappingURL=question.model.js.map