//const dbEngine = process.env.DB_ENVIRONMENT || 'development';
const config = require('../knexfile')['development'];
console.log('CONFIG!!!!!!!!!!!:  ', config);
module.exports = require('knex')(config);
