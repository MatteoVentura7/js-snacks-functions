/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

const userName2 = (prompt("inserisci il tuo nome"))

// Dichiara la funzione qui.

function saluto(utente){
    let hello = `Ciao ${utente}`;
   return hello
 }
// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(userName));
console.log(saluto(userName2));

//Risultato atteso se si passa 'Mario': // ciao Mario
