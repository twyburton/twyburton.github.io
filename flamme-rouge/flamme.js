const SPRINTEUR_DECK = [2,2,2,3,3,3,4,4,4,5,5,5,9,9,9];
const ROULEUR_DECK = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];

const PELOTON_DECK = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,"A","A"];


function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

let pelotonDeck = [];
function initPeloton(){

    pelotonDeck = [...PELOTON_DECK];

    pelotonDeck = shuffle(pelotonDeck);

    console.log(pelotonDeck);
}


initPeloton();
