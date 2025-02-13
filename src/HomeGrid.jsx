import React, { useState ,useEffect} from "react";
import PokeCard from "./PokeCard";

const HomeGrid = () => {
  const [data, setData] = useState({});
  const [pokeList, setList] = useState([]);


  const [pokename, setPokename] = useState('');
  const [pokesvg, setmysvg] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10277
    `)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setList(data.results);
        console.log(pokeList[0]['name']);
      })
      .catch((err) => setData(err));
  }, []);



  return (
    <div className='bg-gray-100 min-h-screen min-w-screen flex justify-center gap-4  '>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-x-30 gap-y-5 items-center border-amber-600">
      {pokeList.map((pokemon) => {
  // Extract the Pokémon ID from its URL
  const pokeId = pokemon.url.split("/")[6];

  return (
    <PokeCard 
      pokename={pokemon.name} 
      pokesvg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`} 
    />
  );
})}

      
      </div>

      </div>
 
  );
};

export default HomeGrid;
