/** Return 4 random pokemon from a list */

function getCards(pokeList) {
  const cards = [];

  let i = 0;
  while (i < 4) {
    const randomChoice = Math.floor(Math.random() * pokeList.length);
    cards.push(pokeList[randomChoice]);

    pokeList.splice(randomChoice, 1);
    i++;
  }
  return cards;
}

export default getCards;