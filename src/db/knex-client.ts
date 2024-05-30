import { Knex, knex } from 'knex';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export type DbAccessParams = {
  dbname: string;
  engine: string;
  username: string;
  password: string;
  host: string;
  port: string;
};

export type DbConfig = {
  /**
   * Secret ARN or name of the DB access params with the DbAccessParams JSON
   */
  secretId?: string;

  /**
   * Values that override values obtained from secret.
   */

  dbname?: string;
  engine?: string;
  username?: string;
  password?: string;
  host?: string;
  port?: string;
};

export class KnexClient {
  db: Knex;

  static async create(): Promise<KnexClient> {
    const instance = new KnexClient();
    await instance.dbSetup();
    return instance;
  }

  grow<T>(data: unknown): T[] {
    // @ts-ignore
    return this.forester.grow(data);
  }

  /**
   * Parses Postgres array column value which is returned as string "{el1,el2,el3,...}"
   * into the Array<D>.
   */
  parseArray<D>(
    arr: string,
    castFn: (s: string) => D = (s) => s as unknown as D,
  ): Array<D> {
    if (!arr) return [];

    const separated = arr.match(/^\{(.*)}$/)?.[1];
    return (
      separated
        ?.split(',')
        ?.map((s) => s.trim())
        .map(castFn) ?? []
    );
  }

  async dbSetup() {
    const db = knex({
      client: 'pg',
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false, // ovo me je zezalo upamti!
        },
      },
      pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 300000,
      },
    });
    //const test = await this.db.raw('SELECT * FROM "users"');
    db.raw('SELECT 1')
      .then(() => {
        console.log('Database connection established successfully');
      })
      .catch((err) => {
        console.error('Failed to establish database connection:', err);
        process.exit(1); // Exit the process with an error code
      });
    return db;
  }
}
