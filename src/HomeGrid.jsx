import React from "react";
import PokeCard from "./PokeCard";

const HomeGrid = () => {
  return (
    <div class="max-w-6xl mx-auto bg-gray-100 p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      
          {/* DYnamic Cards */}
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </div>
      </div>
  );
};

export default HomeGrid;
