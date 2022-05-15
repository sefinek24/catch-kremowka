@echo off
chcp 65001
cls
title Hehehe papież tańczy

if exist node_modules (
    echo » Trwa uruchamianie serwera...
) else (
    echo » Katalog node_modules nie istnieje!
    echo.
    echo Wymagane zależności zostaną zainstalowane za 15 sekund.
    echo Możesz również kliknąć [ENTER], aby zainstalować je natychmiast.
    timeout /t 15
    echo.
    echo » Trwa instalacja zależności...
    npm install
    start start.cmd
)

echo.
node index.js
pause
echo Ups. Cos poszło nie tak ):