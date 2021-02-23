import express from 'express';

const router = express.Router();

import { checkUser } from './signin.controller';

router.get('/Users/login', checkUser);