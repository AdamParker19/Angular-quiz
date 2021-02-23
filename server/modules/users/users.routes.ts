import express from 'express';

const router = express.Router();

import { allUsers } from './user.controller';

router.get('/users', allUsers);