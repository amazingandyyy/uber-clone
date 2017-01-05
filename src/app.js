import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import api from './routes/api';

const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.use('/api', api);

export default app;
