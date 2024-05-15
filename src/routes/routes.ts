import express from 'express';
import { registerUser, listUsers } from './controllers/controller';

const router = express.Router();

router.post('/user/register', registerUser);
router.get('/user/list', listUsers);

export default router;
