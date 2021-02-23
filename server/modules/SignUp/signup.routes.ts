import express from 'express';

const router = express.Router();

import { addUser } from './signup.controller';

router.get('/Users/register', addUser);
