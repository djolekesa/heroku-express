import * as Knex from 'knex';

const dbEnvironment: string = process.env.DB_ENVIRONMENT || 'development';

const config = require('../knexfile')[dbEnvironment];

console.log('CONFIG!!!!!!!!!!!:  ', config);

const knexInstance = Knex(config);

export default knexInstance;
