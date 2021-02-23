"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const signin_controller_1 = require("./signin.controller");
router.get('/Users/login', signin_controller_1.checkUser);
//# sourceMappingURL=signin.routes.js.map