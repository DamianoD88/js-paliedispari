// Palindroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma


// scrivo un prompt per chiedere la parola

var parola = prompt("Inserire una parola");

var controParola = '';


// creo una funzione con all'interno un for, cercando di suddividere le parole per capire se è palindroma


 function giroParola (parola) {
    for ( i  =  parola.length -1; i > -1 ; i--){
        controParola = controParola + parola[i];
        
     }
    
     return controParola;
 }


 controParola = giroParola(parola);
 
 if (parola == controParola){
    console.log('è palindroma');
}else {
    console.log('non è palindroma');
}

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.