import connectPostgres from '../connect/connectPostgres.js';
import connectMongoose from '../connect/connectMongoose.js';

const dbName = 'postgres'; // mongoose, postgres

let db = null;

if (dbName === 'postgres') db = connectPostgres();
if (dbName === 'mongoose') db = connectMongoose();

export default db;
