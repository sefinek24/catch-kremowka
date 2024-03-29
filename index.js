require('dotenv').config();

const express = require('express');
const { hidePoweredBy } = require('helmet');
const favicon = require('serve-favicon');
const { get } = require('axios');
const morgan = require('morgan');
const { version } = require('./package.json');

// Run express instance
const app = express();

// Use
app.use(hidePoweredBy());
app.use(favicon('./public/image/favicon.ico'));
app.use(express.static('public'));

// Set
app.set('view engine', 'ejs');

// Setup logger
app.use(morgan(':method :url [:status] :response-time ms - :user-agent'));

// Functions
const checkUpdate = async () => {
	const res = await get('https://raw.githubusercontent.com/sefinek24/catch-kremowka/main/package.json');
	return { newRelease: res.data.version !== version, yourVersion: version, current: res.data.version };
};

// Endpoints
app.get('/', async (req, res) => res.render('index', { update: await checkUpdate() })); // To powinno być inaczej zrobione, ale na tę chwilę niech to tak zostanie...
app.get('/kremowka', (req, res) => res.render('kremowka'));
app.get('/DFS7pwpEbTHEZ9MoFDkCqhcbzp8HU9nXeDu3Ah7bBfg2PtPVxzXogAXfpvpH4a6HeZaeHGPKovbBprWnrm97mxMasAhVbN4PeDtnKHwxD8ztYVfPGNnsKy2CzJXaWsqBvjoEskCvSBpgX4w5hhWtfovfwTQTKEUFoHKetNaKPXsdroH9552JRVqNfE8qJtwxAFctUMDaavM2hUzLqZVGnKV2PtRYmMWnTyfdLkMmeZMVmM8adtgYDBrTvHhgVE4eDJSPt6A7vNtgZZRDTy4WATfv3Xco3E36PkmGPmeKy7sYxH3RGvdGPTCgge4JkwfyfZFvKkFJRx8PFz6MvHUJ3WrJAUSmQykvXqr9awhruQEAQaNKj8UKuKTv5cgkaZfyQ77q3PfW6mXmVbwDHQPCZ9yvKefmEUjUrQJT6qgAaDnvfhzpxPsXoqTy5yj9T3tJjC4NsKP3PAXuhWhfbaDYYWWtUF2d9UoRWR6P2kgfkD922RGCrK2Q7oHrua53vRkS8P7yyNehSNJj6QmW2McxzmpuVSVQ9F9GUFESTkAcxJU3ZFprSZoSLbM7t8o3dV9y2eQmXQWUZhoqpbgGB5YNEbmyJ82ouzmVeBFCS4XjKK9ynPEpj5BpFnoQUNCNNp9trfvJHSsT3ZSPfWCYsDMxrAMKNQ', (req, res) => res.render('uwu'));

// Error handling
app.get('*', (req, res) => res.redirect('/video/wapiesz.mp4'));
app.use((err, req, res, next) => {
	res.redirect('/video/__________o-nie!-wyjebal-blad__________.mp4');

	console.error(err);
});

// Run server
app.listen(process.env.PORT, async () => {
	console.log(
		`» Aplikacja została pomyślnie uruchomiona.\n• Lokalny adres : http://127.0.0.1:${process.env.PORT}\n• Wersja        : v${version}\n• Tryb startu   : ${process.env.NODE_ENV === 'development' ? 'Rozwój' : 'Produkcja'}\n`,
	);

	const update = await checkUpdate();
	if (update.newRelease) console.log(`» Dostępna jest nowa wersja! v${update.yourVersion} → v${update.current}\n» Pobierz ją z repozytorium: https://github.com/sefinek24/catch-kremowka`);

	if (process.env.NODE_ENV === 'production') process.send('ready');
});

/**
 * Copyright 2022 © by Sefinek. All Rights Reserved.
 * Należy pamiętać o tym, że niniejsza strona powstała w celach humorystycznych.
 *
 * Produkcja: https://kremowka.sefinek.net
 * Repozytorium: https://github.com/sefinek24/catch-kremowka
 */