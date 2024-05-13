module.exports = {
  development: {
    client: 'pg',
    connection:
      'postgres://uct5suljplp0pd:pcf6aae8fe031db5378337c8b2d5dc4afb8447b5fda543e5692cfac6230dc4e2a@cav8p52l9arddb.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com:5432/d7j63psj4jftss',
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
    connection:
      'postgres://uct5suljplp0pd:pcf6aae8fe031db5378337c8b2d5dc4afb8447b5fda543e5692cfac6230dc4e2a@cav8p52l9arddb.cluster-czz5s0kz4scl.eu-west-1.rds.amazonaws.com:5432/d7j63psj4jftss',
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
