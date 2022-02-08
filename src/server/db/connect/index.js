import connectPostgres from './postgres.js';
import connectMongoose from './mongoose.js';

const dbName = 'mongoose'; // mongoose, postgres

let db = null;

if (dbName === 'postgres') db = connectPostgres();
if (dbName === 'mongoose') db = connectMongoose();

export default db;
