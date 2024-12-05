/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const word2 = (prompt("inserisci una parola"))

// Dichiara la funzione qui.

function stringainiziale(stringavocali){ 
    const vocali = 'aeiou'  
    let wordvocal = 0;
    for(let i = 0; i < stringavocali.length; i++){
      if(vocali.indexOf(stringavocali[i]) !== -1){
        wordvocal += 1;
      }
    }
    return wordvocal;
  }

// Invoca la funzione qui e stampa il risultato in console

console.log(stringainiziale(word));
console.log(stringainiziale(word2));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

