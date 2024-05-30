import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();
export async function registerUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    //todo encript pass
    const newUser = await userService.registerUser(username, email, password);
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
    //todo encript pass
    const user = await userService.loginUser(email);
    //todo check password and return token
    return res.status(200).json();
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
    await userService.updateUser(email, imageUrl);
    console.log('UPDATED: ');
    return res.status(200).json();
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}
