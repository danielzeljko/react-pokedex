const BASE_IMG = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

function Pokecard({id, name, type, exp}){
  return (
    <div id={id}>
      <p className="Pokecard-name">{name}</p>
      <img className="Pokemon-img" src={`${BASE_IMG}${id}.png`} alt={name}/>
      <p className="Pokecard-type">type: {type}</p>
      <p className="Pokecard-exp">exp: {exp}</p>
    </div>
  )
}

export default Pokecard