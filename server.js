import express from 'express';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

let db;
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) {
    throw err;
  }

  db = database;
  app.listen(3000, () => console.log('Server running at port 3000...'));
});

app.get('/api/links', (req, res) => {
  db.collection('links').find({}).toArray((err, links) => {
    if (err) {
      throw err;
    }

    res.json(links);
  });
});
