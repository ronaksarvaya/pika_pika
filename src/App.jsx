import { useEffect, useState } from 'react';
import PokeCard from './PokeCard.jsx';
import Nav from './Nav.jsx';
import HomeGrid from './HomeGrid.jsx';

import './App.css';

function App() {
 

  return (
    <>
    <div className="overflow-x-hidden h-screen">
      <Nav/>
      <HomeGrid />
      
     </div>
     
    </>
  );
}

export default App;
//  {/* https://pokeapi.co/api/v2/pokemon/10280/ 1-10279*/}

//       {/* {pokeList.map((curr) => {
//         return <li> {curr.name}</li>;
//       })} */}

//       {/*<PokeCard />*/}