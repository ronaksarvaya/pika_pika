import { useEffect, useState } from 'react';
import PokeCard from './PokeCard.jsx';
import Nav from './Nav.jsx';
import HomeGrid from './HomeGrid.jsx';

import './App.css';

function App() {
  const [data, setData] = useState({});
  const [mysvg, setmysvg] = useState('');
  const [pokeName, setName] = useState('');
  const [pokeList, setList] = useState([]);

  // useEffect(() => {
  //   let pname = prompt('enter pokemon name');
  //   setName(pname);
  // }, []);
  // if (!pokeName) return;//to avoid twice prompt render

  // // fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  // console.log(data.sprites.other.dream_world.front_default);
  // setmysvg(data.sprites.other.dream_world.front_default);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10279
    `)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setList(data.results);
      })
      .catch((err) => setData(err));
  }, []);

  return (
    <>
      {/* https://pokeapi.co/api/v2/pokemon/10280/ 1-10279*/}

      {/* {pokeList.map((curr) => {
        return <li> {curr.name}</li>;
      })} */}

      {/*<PokeCard />*/}


      <Nav/>
      <HomeGrid />
    </>
  );
}

export default App;
