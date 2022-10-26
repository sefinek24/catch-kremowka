@echo off
chcp 65001
title Łapanie kremówek - Copyright 2022 © by Sefinek. All Rights Reserved.
cls

echo =======================================================================
echo                   SYMULATOR ŁAPANIA KREMÓWEK - v1.2.9
echo =======================================================================
echo.
echo   !! Proszę pamiętać, że strona powstała w celach humorystycznych !!
echo.
echo Produkcja    : https://kremowka.sefinek.net
echo Repozytorium : https://github.com/sefinek24/catch-kremowka
echo.
echo ======================================================================= & echo.

if not exist node_modules (
    echo » Katalog node_modules nie istnieje! & echo.

    echo Wymagane zależności zostaną zainstalowane za 9 sekund.
    echo Kliknij dowolny przycisk, aby zainstalować je natychmiast.
    timeout /t 9 & echo.

    echo » Trwa instalacja zależności... & echo.
    npm install
    Start.cmd
)

echo » Trwa uruchamianie serwera... & echo.
node index.js

echo Ups. Cos poszło nie tak ): & echo.
pause