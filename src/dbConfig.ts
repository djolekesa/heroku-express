import config from '../knexfile';
import Knex, { knex } from 'knex';
const knexInstance = Knex(config);

export default knexInstance;
