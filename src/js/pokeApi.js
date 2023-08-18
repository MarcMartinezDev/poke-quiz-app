//return data of Pokemon image and Pokemon names as a Array.
const pokeApi = async () =>
{
    const data = [];

    try {
        const urls = 
        [
            `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 600)}`,
            "https://pokeapi.co/api/v2/pokemon?limit=600"
        ];
        const getPokemon = await fetch(urls[0]);
        const pokemon = await getPokemon.json();
        data[0] = pokemon.sprites.front_default;
        data[1] = pokemon.name;
        
        for(let i = 2; i < 5; i++){
          const getNames = await fetch(urls[1]);
          const name = await getNames.json();
          data[i] = name.results[Math.floor(Math.random() * 600)].name;
        }
        return data;
    } catch (error) {
        console.error(error.message);
    }
    
}
export default pokeApi;