import { Request, Response } from 'express';
import db from '../config/db'; // Import your Knex instance
import * as userService from '../services/userService';

export async function registerUser(req, res, next) {
  try {
    const { username, email, password } = req.body;
    //todo encript pass
    const newUser = await userService.registerUser(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
}

export async function listUsers(req, res, next) {
  try {
    const userId = req.params.id;
    const userProfile = await userService.listUsers();
    res.json(userProfile);
  } catch (error) {
    next(error); // Pass error to the error handling middleware
  }
}
