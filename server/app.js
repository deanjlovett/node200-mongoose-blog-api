const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//mongoose.connect('mongodb://localhost/my-blog', { useMongoClient: true });
//mongoose.connect('mongodb://localhost/my-blog');
// mongodb://<dbuser>:<dbpassword>@ds133137.mlab.com:33137/heroku_fxdbq06m

mongoose.connect(
    'mongodb://test:test12@ds133137.mlab.com:33137/heroku_fxdbq06m',
    { useNewUrlParser: true }
);

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send();
});

app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

module.exports = app;
