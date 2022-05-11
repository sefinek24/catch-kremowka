const express = require('express');
const { hidePoweredBy } = require('helmet');
require('dotenv').config();
const app = express();

app.use(hidePoweredBy());
app.use(express.static('public'));

app.listen(process.env.PORT, () => console.log(`Application is running on http://127.0.0.1:${process.env.PORT}.`));