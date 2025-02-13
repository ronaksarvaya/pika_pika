import { useEffect, useState } from "react";

import "./App.css";
import "./PokeCard.css";

function PokeCard({pokename,pokesvg}) {
  return (
    <>
      {/* {pokeList.map((curr) => {
        return <li> {curr.name}</li>;
      })} */}
      <div class="h-72 w-64 border border-black bg-gray-400 flex flex-col  items-center rounded-lg">
        <div class="h-36 w-36 bg-white mt-2 rounded-full flex justify-center border-amber-600 items-center">
          <img
            src={pokesvg}
            alt={pokename}
            class="h-32 w-32"
          />

        </div>
        <h1><b>{pokename.toUpperCase()}</b></h1>
      </div>
    </>
  );
}

export default PokeCard;
