import { Request, Response } from 'express';
import db from './config/db'; // Import your Knex instance

export const getAllExamples = async (req: Request, res: Response) => {
  try {
    const examples = await db.select().from('examples');
    res.json(examples);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createExample = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    await db('examples').insert({ name });
    res.status(201).json({ message: 'Example created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
