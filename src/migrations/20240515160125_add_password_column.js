exports.up = function (knex) {
  return knex.schema.alterTable('users', (tbl) => {
    tbl.string('userName').nullable();
    tbl.string('password').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.createTable('users', (tbl) => {
    return knex.schema.dropTableIfExists('users');
  });
};
