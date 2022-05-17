const express = require('express');
const { hidePoweredBy } = require('helmet');
const favicon = require('serve-favicon');
const { get } = require('axios');
const { version } = require('./package.json');
require('dotenv').config();

const app = express();

app.use(hidePoweredBy());
app.use(favicon('./public/image/favicon.ico'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const checkUpdate = async () => {
	const res = await get('https://raw.githubusercontent.com/sefinek24/papiez-tanczy/main/package.json');
	return { newRelease: res.data.version !== version, yourVersion: version, current: res.data.version };
};
const result = checkUpdate();


app.get('/', async (req, res) => res.render('index', { update: await result }));
app.get('/uwu', async (req, res) => res.render('uwu'));

app.get('*', (req, res) => res.redirect('/video/wapiesz.mp4'));
app.use((err, req, res, next) => {
	res.redirect('/video/__________o-nie!-wyjebal-blad__________.mp4');

	console.error(err);
});


app.listen(process.env.PORT, async () => {
	console.log(`» Aplikacja została pomyślnie uruchomiona.\n• Lokalny adres : http://127.0.0.1:${process.env.PORT}\n• Wersja        : v${version}\n• Tryb startu   : ${process.env.NODE_ENV === 'development' ? 'Rozwój' : 'Produkcja'}`);

	const update = await result;
	if (update.newRelease) console.log(`\n» Dostępna jest nowa wersja! v${update.yourVersion} -> v${update.current}\n» Pobierz ją z repozytorium: https://github.com/sefinek24/papiez-tanczy`);

	if (process.env.NODE_ENV === 'production') process.send('ready');
});