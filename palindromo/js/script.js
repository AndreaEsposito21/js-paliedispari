// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una Parola");
console.log( parolaUtente );


// Creo una funzione che deve capire se la parola inserita è palindroma
//
// Creo un ciclo per manipolare la parolaUtente
// 
function funzionePalindromo(parolaPalindroma) {
    var palindromo;

    // Parola letta al contrario ----------------------------------
    var parolaRovescio = '';
    for (var i = parolaPalindroma.length -1; i >= 0 ; i--) {
        var thisParola = parolaPalindroma[i];
        console.log('Parola al rovescio ', thisParola);

        parolaRovescio += thisParola;
    }
    console.log(parolaRovescio);
    // ----------------------------------    

    // Compariamo la parola scritta dall'utente sia uguale se letta al contrario
    if ( parolaPalindroma == parolaRovescio ) {
        palindromo = "La parola che hai scritto è palindroma";
    } else {
        palindromo = "La parola che hai scritto non è palindroma";
    }

    
    return palindromo;
    console.log(palindromo);
}

// ----------------------------------

var messaggioParola = funzionePalindromo(parolaUtente);
alert(messaggioParola);