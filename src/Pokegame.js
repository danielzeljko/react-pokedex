import Pokedex from "./Pokedex";
import {getCards, calculateExp} from "./helpers";
import "./Pokegame.css";
import pokeList from "./pokeList";

const DEFAULT_CARDS = pokeList;

//Set default value to pokeList
function Pokegame({ pokeList=DEFAULT_CARDS }) {

  const handOne = getCards(pokeList);
  const handTwo = getCards(pokeList);
  const pointsOne = calculateExp(handOne);
  const pointsTwo = calculateExp(handTwo);

  const winner = (pointsOne > pointsTwo) ? "one" : "two";
  //what happens if there is a tie?

  return (
    <div className="Pokegame">
      <Pokedex pokeList={handOne} isWinner={winner === "one" ? true : false}></Pokedex>
      <Pokedex pokeList={handTwo} isWinner={winner === "two" ? true : false}></Pokedex>
    </div>
  );
}

export default Pokegame;
