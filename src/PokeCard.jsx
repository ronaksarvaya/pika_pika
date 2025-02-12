import { useEffect, useState } from 'react';

import './App.css';
import './PokeCard.css';

function PokeCard() {
  return (
    <>
      {/* {pokeList.map((curr) => {
        return <li> {curr.name}</li>;
      })} */}

      <div class="card">
        <div class="imgcont">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default PokeCard;
