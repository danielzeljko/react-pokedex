import "./Pokedex.css";
import Pokecard from "./Pokecard";

function Pokedex({ pokeList, isWinner }) {
  let totalScore = 0;

  const list = pokeList.map((p) => {
    totalScore += p.base_experience;

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
    <div className="Pokedex">
      {list}
      <p>total score: {totalScore}</p>
      {isWinner ? <h2>"This hand wins"</h2> : ""}
    </div>
  );
}

export default Pokedex;
