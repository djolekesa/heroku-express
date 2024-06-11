import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { AuthService } from '../services/authService';
import { EmailService } from '../services/emailService';
import bcrypt from 'bcryptjs';

const userService = new UserService();
const authService = new AuthService();

function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}
export async function registerUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = password ? hashPassword(password) : null;
    const newUser = await userService.registerUser(
      username,
      email,
      hashedPassword,
    );
    return res.status(201).json(newUser);
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}

export async function listUsers(req: Request, res: Response) {
  try {
    const users = await userService.listUsers();
    return res.status(200).json(users);
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = await authService.getAccessToken();
    return res.status(200).json(token);
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}

export async function updateUserImage(req: Request, res: Response) {
  try {
    const { email, imageUrl } = req.body;
    //todo encript pass
    const updatedUser = await userService.updateUser(email, imageUrl);

    const emailService = new EmailService();

    await emailService.sendMail(
      `User ${updatedUser} just uploaded new profile photo`,
      email,
    );
    return res.status(200).json();
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}
