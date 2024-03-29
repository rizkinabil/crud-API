const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const appRoute = require('./routes/karyawan-route');
app.use('/', appRoute);

app.listen(3000, () => {
  console.log('Server running on Port : 3000');
});
