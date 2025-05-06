import { useParams } from "react-router-dom";
import { useState } from "react";
import './details.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";
function PokemonDetails({ pokemonName }) {
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);
    const [showAll, setShowAll] = useState(false);
    return (
        <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={pokemon.image} /><br/>
            <div className="pokemon-details-name" id="name"><span>{pokemon.name}</span></div>
            <div className="pokemon-details-name " id="hw">Height: {pokemon.height/10} m</div>
            <div className="pokemon-details-name " id="hw">Weight: {pokemon.weight/10} kg</div>
            

            {
                pokemon.types && pokemon.similarPokemons && 
                <div className="type">
                   <h3> More {pokemon.types[0]} type pokemons:-</h3>
                   <ul>
                      {(showAll ? pokemon.similarPokemons : pokemon.similarPokemons.slice(0, 5)).map((p) => (
                      <li key={p.pokemon.url}>{p.pokemon.name}</li>
                      ))}
                   </ul>
                   <button onClick={() => setShowAll(!showAll)} style={{ marginTop: '10px' }}>
                     {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            }
        </div>
    );
}

export default PokemonDetails;