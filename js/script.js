// nome utente

let userName = prompt("Inserisci il tuo nome");

// utente cognome

let userSurname = prompt("Inserisci il tuo cognome");

// utente colore preferito

let userColor = prompt("Inserisci il tuo colore preferito");

// unire le 3 variabili

let userPassword = userName + userSurname + userColor + "24";

// debug calcolo
console.log(userPassword);

// risultato all'utente password

document.getElementById('my_container').innerHTML = `La tua password &egrave; ${userPassword}`;

// alternativa variabile userPassword

document.getElementById('my_container').innerHTML = `La tua password &egrave; ${userName}${userSurname}${userColor}24`;