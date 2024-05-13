import knex from "knex";

const db = knex({
  client: "pg", // Change this to your preferred database client (e.g., 'mysql', 'sqlite3')
  connection: {
    host: "your-host",
    user: "your-username",
    password: "your-password",
    database: "your-database-name",
  },
  migrations: {
    directory: __dirname + "/../migrations",
  },
  seeds: {
    directory: __dirname + "/../seeds",
  },
});

export default db;
