// Palindroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma


// scrivo un prompt per chiedere la parola

// var parola = prompt("Inserire una parola");

// var controParola = '';


// creo una funzione con all'interno un for, cercando di suddividere le parole per capire se è palindroma


//  function giroParola (parola) {
//     for ( i  =  parola.length -1; i > -1 ; i--){
//         controParola = controParola + parola[i];
        
//      }
    
//      return controParola;
//  }


//  controParola = giroParola(parola);
 
//  if (parola == controParola){
//     console.log('è palindroma');
// }else {
//     console.log('non è palindroma');
// }


/******************************************************* */

// Pari e Dispari L’utente sceglie pari o dispari.

var numero = parseInt(prompt('Inserisci un numero'));
var numero2 = randomNumber(1,5);
console.log(numero2);

var valore = prompt('Inserisci pari o dispari');
valore = valore.toLowerCase();



var somma = numero + numero2;
console.log(somma);

var risultato = isEven(somma);

// true se pari, false se è dispari

if(valore == 'pari' && risultato || valore == 'dispari' && !risultato ){
    console.log('hai vinto');
} else {
    console.log('hai perso');
}

function isEven(number){
    if(number % 2 == 0){
        return true;
    } else {
        return false;
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}



