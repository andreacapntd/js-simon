// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var numeriCpu = [];
for (var i = 0; i < 5; i++) {
  var numeriRandom = getRandomIntInclusive(1, 100);
  numeriCpu.push(numeriRandom)
}
alert('I numeri da ricordare sono' + ' ' + numeriCpu);












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
