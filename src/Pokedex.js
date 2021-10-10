import defaultPokemonList from "./defaultPokemonList";
import imgSource from "./imgSource";
import Pokecard from "./Pokecard";

const Pokedex = ({ pokemonList = defaultPokemonList }) => {
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemonList.map((pokemon) => (
          <Pokecard
            name={pokemon.name}
            img={imgSource(pokemon.id)}
            type={pokemon.type}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
