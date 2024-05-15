import { Request, Response } from 'express';
import * as userService from '../services/userService';

export async function registerUser(req: Request, res: Response) {
  try {
    const { username, email, password } = req.body;
    //todo encript pass
    const newUser = await userService.registerUser(username, email, password);
    res.status(201).json(newUser);
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}

export async function listUsers(req: Request, res: Response) {
  try {
    console.log('A OOVOOOVOOVOVOOVOVOV: ');
    const userProfile = await userService.listUsers();
    res.json(userProfile);
  } catch {
    (e: Error) => {
      console.log('ERR: ', e);
    };
  }
}
