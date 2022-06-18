@echo off
chcp 65001
title Hehe papież tańczy - Copyright 2022 © by Sefinek. All Rights Reserved.
cls

echo =======================================================================
echo                        PAPIEŻ TAŃCZY - v1.2.3
echo =======================================================================
echo.
echo   !! Proszę pamiętać, że strona powstała w celach humorystycznych !!
echo.
echo Produkcja    : https://kremowka.sefinek.fun
echo Repozytorium : https://github.com/sefinek24/papiez-tanczy
echo.
echo ======================================================================= & echo.

if exist node_modules (
    echo » Trwa uruchamianie serwera...
) else (
    echo » Katalog node_modules nie istnieje! & echo.

    echo Wymagane zależności zostaną zainstalowane za 9 sekund.
    echo Kliknij dowolny przycisk, aby zainstalować je natychmiast.
    timeout /t 9 & echo.

    echo » Trwa instalacja zależności...
    npm install
    Start.cmd
)

echo.
node index.js
echo Ups. Cos poszło nie tak ):
pause