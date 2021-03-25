// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una Parola");
console.log( parolaUtente );

// Faccio un ciclo per manipolare la stringa
// Parola letta da sinistra a destra ----------------------------------
for (var i = 0; i < parolaUtente.length; i++) {
    console.log('Parola dritta ', parolaUtente[i]);
}
var parolaDritta = parolaUtente[i]; 
// Parola letta da destra a sinistra ----------------------------------
for (var i = parolaUtente.length -1; i >= 0 ; i--) {
    console.log('Parola al rovescio ', parolaUtente[i]);  
}
var parolaRovescio = parolaUtente[i];
// ----------------------------------


// Creo una funzione che deve capire se la parola inserita è palindroma
//
// 
function funzionePalindromo(parolaPalindroma) {
    var palindromo;
    
    if ( parolaDritta == parolaRovescio ) {
        palindromo = "La parola che hai scritto " + "è palindroma";
    } else {
        palindromo = "La parola che hai scritto " + "non è palindroma";
    }
    console.log(palindromo);
    return palindromo;
}
// ----------------------------------

var messaggioParola = funzionePalindromo(parolaUtente);
alert(messaggioParola);