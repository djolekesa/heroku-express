const dbEnvironment: string = process.env.DB_ENVIRONMENT || 'development';

const config = require('../knexfile')[dbEnvironment];

export default config;
