"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const quiz_controller_1 = require("./quiz.controller");
router.get('/Quiz/startquiz', quiz_controller_1.initScores);
//# sourceMappingURL=quiz.routes.js.map