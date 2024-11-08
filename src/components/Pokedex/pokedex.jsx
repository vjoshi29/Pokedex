import { useState } from "react";
import PokemonList from "../pokemonlist/pklist";
import Search from "../search/search";

// CSS import
import './pokedex.css';
import PokemonDetails from "../pokemonDetails/details";

function Pokedex() {

    const [searchTerm, setSearchterm] = useState('');

    return (
        <div className="pokedex-wrapper">
            <Search updateSearchTerm={setSearchterm} />
            { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default Pokedex;