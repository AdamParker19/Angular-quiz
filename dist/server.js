"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("./environment");
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const questions_routes_1 = __importDefault(require("./modules/questions/questions.routes"));
Promise.resolve().then(() => __importStar(require('./config/db')));
const UserController = __importStar(require("./modules/users/user.controller"));
const SignupController = __importStar(require("./modules/SignUp/signup.controller"));
const SignInController = __importStar(require("./modules/SignIn/signin.controller"));
const QuizController = __importStar(require("./modules/Quiz/quiz.controller"));
const verifySignup_1 = require("./modules/middlewares/verifySignup");
const app = express_1.default();
const authJWT = require('./modules/middlewares/authJWT');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(compression_1.default());
const serveIndex = (req, res) => {
    // X-BASE-HREF
    const indexPath = path.resolve('./client/dist/app/index.html');
    fs.exists(indexPath, (clientExists) => {
        if (req.headers['X-BASE-HREF'.toLowerCase()]) {
            const xBasePath = req.headers['X-BASE-HREF'.toLowerCase()] || '/';
            if (!clientExists) {
                return sendServerInfo(res, clientExists);
            }
            fs.readFile(indexPath, 'utf8', (err, text) => {
                text = text.replace('<base href="/">', `<base href="${xBasePath}">`);
                res.set('Content-Type', 'text/html');
                res.send(new Buffer(text));
            });
        }
        else {
            if (clientExists) {
                return res.sendFile(indexPath);
            }
            return sendServerInfo(res, clientExists);
        }
    });
};
const sendServerInfo = (res, clientExists) => {
    const serverInfo = {
        time: new Date(),
        clientExists
    };
    res.set('Content-type', 'application/json');
    return res.send(JSON.stringify(serverInfo, undefined, 2));
};
app.use(express_1.default.static(path.resolve('./client/dist/app')));
app.get('/', (req, res) => serveIndex(req, res));
app.get(/^\/(?!api).*/, (req, res) => serveIndex(req, res));
// Main route declarations
app.use('/api/questions', questions_routes_1.default);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
});
app.get('/api/Users', UserController.allUsers);
app.post('/api/Users/register', [verifySignup_1.checkDuplicateEmail], SignupController.addUser);
app.post('/api/Users/login', SignInController.checkUser);
app.post('/api/Quiz/startQuiz', QuizController.initScores);
app.listen(environment_1.environment.port, () => console.log('Aitheon Demo listening on port 3000!'));
//# sourceMappingURL=server.js.map