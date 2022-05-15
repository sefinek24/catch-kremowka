const express = require('express');
const { hidePoweredBy } = require('helmet');
const { get } = require('axios');
const { version } = require('./package.json');
require('dotenv').config();
const app = express();

app.use(hidePoweredBy());
app.use(express.static('public'));

app.listen(process.env.PORT, async () => {
	console.log(`» Aplikacja została pomyślnie uruchomiona.\n• Lokalny adres : http://127.0.0.1:${process.env.PORT}\n• Wersja        : v${version}`);

	const res = await get('https://raw.githubusercontent.com/sefinek24/papiez-tanczy/main/package.json');
	if (res.data.version !== version) console.log(`\n» Dostępna jest nowa wersja! v${version} -> v${res.data.version}\n» Pobierz ją z repozytorium: https://github.com/sefinek24/papiez-tanczy`);

	if (process.env.NODE_ENV === 'production') process.send('ready');
});