#!/bin/sh

mkdir LibraryApp
cd LibraryApp
echo Lets clone the needed repositories from Github..
git clone https://github.com/matiaslang/library-app.git
git clone https://github.com/matiaslang/LibraryApi.git
echo Ok, done cloning. 

echo Starting the 


echo Installing node dependencies and starting the UI
ls
cd library-app/src/
npm i
npm start