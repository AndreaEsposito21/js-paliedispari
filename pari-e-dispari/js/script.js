// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//  Dichiariamo chi ha vinto.



// L'utente scrive "pari" o "dispari" ---------------------------------
var sceltaUtente = prompt(" Scrivi 'pari' o 'dispari' ");
console.log(sceltaUtente);

// Se l'utente inserisce parole diverse allora viene avvisato che il comando non è valido
if (sceltaUtente != "pari" && sceltaUtente != "dispari") {
    alert("Comando non valido!");
}

// L'utente scrive un numero compreso tra 1 e 5
var numeroUtente = parseInt( prompt( "Scrivi un numero da 1 a 5" ) );
console.log('numero utente: ', numeroUtente);
// Se l'utente inserisce un numero maggiore di 5, allora viene avvisato che il comando non è valido
if (numeroUtente > 5) {
    alert("Comando non valido!");
}
// ---------------------------------


// Generiamo, con una funzione, un numero random tra 1 e 5
//
//
function generatoreNumero(numeroComputer) {
    var numeroCasualeComputer = Math.floor(Math.random() * 5) + 1;

    console.log('numero pc: ', numeroCasualeComputer);
    return numeroCasualeComputer;
}
// ---------------------------------


// Somma del numero scelto dell'utente più quello casuale del computer
var sommaNumeri = generatoreNumero() + numeroUtente;
console.log('somma: ', sommaNumeri);
// ---------------------------------


// Generiamo una funzione che ci dirà se la somma è pari o dispari ---------------------------------
//
//
function pariDispari() {
    var somma;

    if ( sommaNumeri % 2 == 0 ) {
        somma = "pari";
        // console.log("La somma è: ", somma);
    } else {
        somma = "dispari";
        // console.log("La somma è: ", somma);
    }

    return somma;
}

var risultato = pariDispari(sommaNumeri);
console.log('risultato: ', risultato);
// ---------------------------------



// Dichiarazione del vincitore ---------------------------------
//
if (risultato == sceltaUtente) {
    alert("Hai vinto! :)");
} else {
    alert("Hai perso! :(");
}
// ---------------------------------