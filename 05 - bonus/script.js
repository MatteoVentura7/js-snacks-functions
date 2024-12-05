/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const name2 = (prompt("inserisci il tuo nome"))


// Dichiara la funzione qui.

function saluto(utente){

    const oraCorrente = new Date().getHours();
    let mex;

    if(oraCorrente < 13){
        mex='Buongiorno'
    }
    else if(oraCorrente < 17){
        mex='Buon pommeriggio'
    }
    else{   
        mex='Buonasera'  
    }
    return `${mex} ${utente}`;
 }

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(name));
console.log(saluto(name2));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.