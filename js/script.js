// Un alert espone 5 numeri casuali (univoci).
var numeriCpu = [];
while (numeriCpu.length < 5) {
  var numeriRandom = getRandomIntInclusive(1, 100);
  if (numeriCpu.includes(numeriRandom) == false) {
    numeriCpu.push(numeriRandom)
  }
}
console.log(numeriCpu);
alert('I numeri da ricordare sono' + ' ' + numeriCpu);

// Poi parte un timer di 30 secondi.
setTimeout(askNumberUser,2000);


//Funzioni

//funzione per generare numeri random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funzione di controllo di un elemento se è incluso nell array
function inArray (array, elemento) {
  var i = 0
  var trovato = false;
  while (i < array.length && trovato == false) {
    if (array[i] == elemento) {
      trovato = true;
    }
    i++
  }
  return trovato;
}

//funzione di controllo dei dati inseriti dall utente
function checkRange(min,max,num) {
  if (num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}

//funzione di gioco utente
function askNumberUser() {
  var numeriUtente = [];

  while (numeriUtente.length < numeriCpu.length) {
   var risposteUtente = parseInt(prompt('Inserisci il numero'));
   if (!numeriUtente.includes(risposteUtente) && !isNaN(risposteUtente)) {
    numeriUtente.push(risposteUtente);
   }
  }
  var numeriUtenteOk = [];


  for (var i = 0; i < numeriUtente.length; i++) {
    if (numeriCpu.includes(numeriUtente[i])) {
      numeriUtenteOk.push(numeriUtente[i]);
    }
  }

  alert('Hai indovinato' + ' ' + numeriUtenteOk.length + ' ' + ' numeri');
  alert('I numeri indovinati sono' + ' ' + numeriUtenteOk);


}
