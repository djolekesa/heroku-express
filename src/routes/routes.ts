import express from 'express';
import {
  registerUser,
  listUsers,
  loginUser,
  updateUserImage,
} from '../controllers/controller';

const router = express.Router();

router.post('/user/register', registerUser);
router.get('/user/list', listUsers);
router.post('/user/login', loginUser);
router.put('/user/update', updateUserImage);

export default router;
