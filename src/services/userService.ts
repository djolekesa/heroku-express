import db from '../dbConfig';

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export async function registerUser(
  username: string,
  email: string,
  password: string,
) {
  await db('users').insert({
    username,
    email,
    password,
  });
}

export async function listUsers(): Promise<User[]> {
  return await db<User>('users').select('id', 'email', 'username');
}
