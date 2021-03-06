import express from 'express';
import { environment } from './environment';
import * as glob from 'glob';
import compression from 'compression';
import bodyParser from 'body-parser';
import * as fs from 'fs';
import * as path from 'path';
import questions from './modules/questions/questions.routes';
import('./config/db');
import * as UserController from './modules/users/user.controller';
import * as SignupController from './modules/SignUp/signup.controller';
import * as SignInController from './modules/SignIn/signin.controller';
import * as QuizController from './modules/Quiz/quiz.controller';
import { checkDuplicateEmail } from './modules/middlewares/verifySignup';

const app = express();
const authJWT = require('./modules/middlewares/authJWT');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

const serveIndex = (req: any, res: any) => {
    // X-BASE-HREF
    const indexPath = path.resolve('./client/dist/app/index.html');
    fs.exists(indexPath, (clientExists: boolean) => {
        if (req.headers['X-BASE-HREF'.toLowerCase()]) {
            const xBasePath = req.headers['X-BASE-HREF'.toLowerCase()] || '/';
            if (!clientExists) {
                return sendServerInfo(res, clientExists);
            }
            fs.readFile(indexPath, 'utf8', (err: any, text: string) => {
                text = text.replace('<base href="/">', `<base href="${xBasePath}">`);
                res.set('Content-Type', 'text/html');
                res.send(new Buffer(text));
            });
        } else {
            if (clientExists) {
                return res.sendFile(indexPath);
            }
            return sendServerInfo(res, clientExists);
        }
    });
}

const sendServerInfo = (res: any, clientExists: boolean) => {
    const serverInfo = {
        time: new Date(),
        clientExists
    } as any;
    res.set('Content-type', 'application/json');
    return res.send(JSON.stringify(serverInfo, undefined, 2));
}


app.use(express.static(path.resolve('./client/dist/app')));
app.get('/', (req, res) => serveIndex(req, res));
app.get(/^\/(?!api).*/, (req, res) => serveIndex(req, res));

// Main route declarations
app.use('/api/questions', questions);
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});
app.get('/api/Users', UserController.allUsers);
app.post('/api/Users/register', [checkDuplicateEmail], SignupController.addUser);
app.post('/api/Users/login', SignInController.checkUser);
app.post('/api/Quiz/startQuiz', QuizController.initScores);

app.listen(environment.port, () => console.log('Aitheon Demo listening on port 3000!'));



