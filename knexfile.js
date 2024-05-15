module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // ovo me je zezalo upamti!
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './src/migrations',
    },
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: 'knex_migrations',
      directory: './src/migrations',
    },
  },
};
