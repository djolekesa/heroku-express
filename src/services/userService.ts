// import knexInstance from '../dbConfig';
import { KnexClient } from '../db/knex-client';
const knexClient = new KnexClient();

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
//const knexInstance = new KnexClient();
export class UserService {
  constructor() {
    //const db = await this.createKnexInstance()
  }

  private async createKnexInstance() {
    return await knexClient.dbSetup();
  }

  async registerUser(username: string, email: string, password: string) {
    const db = await knexClient.dbSetup();
    await db.raw(
      `INSERT INTO "users"("userName", "email", "password") values('${username}', '${email}', '${password}')`,
    );
    // await db('users').insert({
    //   username,
    //   email,
    //   password,
    // });
  }

  async listUsers(): Promise<User[]> {
    try {
      console.log('Ovo ok???? ');
      const db = await knexClient.dbSetup();
      const users = await db.raw('SELECT * FROM "users"');
      return users.rows;
    } catch {
      (err) => {
        console.log('ERR: ', err);
      };
    }
  }
}
