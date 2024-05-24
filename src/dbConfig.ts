import Knex, { knex } from 'knex';
console.log('OVDE RADI');
import knexConfig from './knexfile';
console.log('OVDE RADI');

// TODO Set environment from `.env`
const knexInstance = knex(knexConfig);

export default knexInstance;
