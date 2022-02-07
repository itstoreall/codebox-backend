import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import serverHandler from './server/serverHandler.js';

const app = express();

app.use(cors());

serverHandler(app);

/*
app.use(express.json());
*/
