// 1. Genera un numero casuale compreso tra 1 e 100 e memorizzalo.
// 2. Chiedi all'utente di inserire un numero.
// 3. Valuta se il numero inserito dall'utente è maggiore, minore o uguale al numero generato casualmente.
// 4. Ripeti il passaggio 2 e 3 fino a quando l'utente indovina il numero.
// 5. Visualizza il numero di tentativi effettuati dall'utente per indovinare il numero.


let randomNumber = Math.floor(Math.random() * 100 - 1 ) + 1;
let attemps = 0;

while (true) {
    let insertNumber = prompt("Il numero generato casualmente è : ");
    attemps++;
    
    if (insertNumber > randomNumber){
        alert("Il numero inserito è alto,scendi un pochino.");
    } else if (insertNumber < randomNumber){
        alert("Il numero inserito è basso,alza l'asticella.");
    } else {
        alert("Hai indovinato il numero " + randomNumber + " in " + attemps + " tentativi.");
        break;
    }
}




