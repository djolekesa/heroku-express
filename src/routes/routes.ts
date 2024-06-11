import express from 'express';
import { AuthService } from '../services/authService';
import {
  registerUser,
  listUsers,
  loginUser,
  updateUserImage,
} from '../controllers/controller';

const authCheck = new AuthService().getJwtCheck();

const router = express.Router();

router.post('/user/register', registerUser);
router.get('/user/list', authCheck, listUsers);
router.post('/login', loginUser);
router.put('/user/update', authCheck, updateUserImage);

export default router;
