import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.get('/api', (req, res) => {
    res.send('d')
});

app.listen(8000, () => {
  console.log('Running on port 8000');
});

module.exports = app;