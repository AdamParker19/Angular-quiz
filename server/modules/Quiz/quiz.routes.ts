import express from 'express';

const router = express.Router();

import { initScores } from './quiz.controller';

router.get('/Quiz/startquiz', initScores);