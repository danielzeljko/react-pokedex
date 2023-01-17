import Pokedex from "./Pokedex";
import getCards from "./helpers";
import "./Pokegame.css"

function Pokegame({ pokeList }) {
  return (
    <div className="Pokegame">
      <div className="top-hand">
        <Pokedex pokeList={getCards(pokeList)}></Pokedex>
      </div>
      <div className="bot-hand">
        <Pokedex pokeList={getCards(pokeList)}></Pokedex>
      </div>
    </div>
  );
}

export default Pokegame;