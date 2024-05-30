import { KnexClient } from '../db/knex-client';
const knexClient = new KnexClient();

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
export class UserService {
  private db: any;
  constructor() {
    this.initKnexConnection();
  }

  async initKnexConnection() {
    console.log('Init connection');
    this.db = await knexClient.dbSetup();
  }
  async registerUser(username: string, email: string, password: string) {
    await this.db.raw(
      `INSERT INTO "users"("userName", "email", "password") values('${username}', '${email}', '${password}')`,
    );
  }

  async listUsers(): Promise<User[]> {
    console.log('LIST: ');
    try {
      const users = await this.db.raw('SELECT * FROM "users"');
      return users.rows;
    } catch {
      (err) => {
        console.log('ERR: ', err);
      };
    }
  }

  async loginUser(email: string): Promise<User[]> {
    try {
      const user = await this.db.raw(
        `SELECT * from "users" WHERE email = '${email}'`,
      );
      return user.rows[0];
    } catch {
      (err) => {
        console.log('ERR: ', err);
      };
    }
  }

  async updateUser(email: string, url: string): Promise<void> {
    console.log('url: ', url);
    return await this.db.raw(
      `UPDATE "users" SET "imageUrl" = '${url}' WHERE email = '${email}'`,
    );
  }
}
