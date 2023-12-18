import express from 'express';
import BodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app    = express();

app.use(bodyParser.json({limit : "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended: true}));
app.use(cors());


// akan digunakan Untuk Setup Database mongo 



