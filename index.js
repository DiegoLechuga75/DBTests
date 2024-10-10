const express = require('express');
const path = require('path');
const db = require('./config/db');


const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const initializeDB = async () => {
  try {
    await db.sync();
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to create database:', error);
  }
};

initializeDB();

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})