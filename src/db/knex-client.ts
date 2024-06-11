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
  async dbSetup() {
    const db = knex({
      client: 'pg',
      connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 300000,
      },
    });
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
