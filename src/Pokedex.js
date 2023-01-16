import Pokecard from "./Pokecard"

function Pokedex({pokeList}) {

  const list = pokeList.map(p => {
    return (
      <Pokecard
        id={p.id}
        name={p.name}
        type={p.type}
        exp={p.base_experience}
      />
    )
  })

  return(
    <div>
      {list}
    </div>
  )
}

export default Pokedex