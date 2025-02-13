import { useEffect, useState } from "react";

import "./App.css";
import "./PokeCard.css";

function PokeCard() {
  return (
    <>
      {/* {pokeList.map((curr) => {
        return <li> {curr.name}</li>;
      })} */}
      <div class="h-72 w-64 border border-black bg-gray-400 flex justify-center items-center rounded-lg">
        <div class="h-36 w-36 bg-white mt-2 rounded-full flex justify-center items-center">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt=""
            class="h-32 w-32"
          />
        </div>
      </div>
    </>
  );
}

export default PokeCard;
