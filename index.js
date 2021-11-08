const express = require('express');
const helmet = require("helmet");
const app = express();

app.use(helmet.hidePoweredBy());
app.use(express.static('public'));

app.listen(8000, null, null, () => console.log('Uruchomiono na porcie 8000.'));