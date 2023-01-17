import "./Pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex({ pokeList }) {
  const list = pokeList.map(p => {
    return (
      <Pokecard
        key={p.id}
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience}
      />
    );
  });

  return (
    <div class="Pokedex">
      {list}
    </div>
  );
}

export default Pokedex;