import connectPostgres from './postgres/connectPostgres.js';
import connectMongoDb from './mongodb/connectMongoDb.js';

const dbName = 'mongodb'; // mongodb, postgres
let currentDb = null;

if (dbName === 'postgres') currentDb = connectPostgres();
if (dbName === 'mongodb') currentDb = connectMongoDb();

export default currentDb;
