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

var utente = prompt("Pari o dispari?"); 

var sceltaNum = prompt("Scegli un numero da 1 a 5");

// e inserisce un numero da 1 a 5.

var computer = num(1, 5);

var somma = somNum (sceltaNum, computer)



function numi(min,max){
   return Math.floor(Math.random() * (max - min +1)) + min;
}

function somNum(num1, num2){
    return somma - num1 + num2;
}


// output

function sePari(pari){
    if (pari % 2 == 0){
        console.log('pari');
    }else {
        console.log('dispari');
    }
}



// Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

