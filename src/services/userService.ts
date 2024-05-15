import knexInstance from '../dbConfig';

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
  await knexInstance('users').insert({
    username,
    email,
    password,
  });
}

export async function listUsers(): Promise<User[]> {
  console.log('ILI OOOOOOOVDE PUCAS?????/ ?????????');

  return await knexInstance('users').select('id', 'email', 'username');
}
