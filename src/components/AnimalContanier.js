import React from "react";
import AnimalCard from "./AnimalCard"

function AnimalContanier({animals}){
    const animalsArray = animals.map((animal)=><AnimalCard key={animal.id} animal={animal}/>)

    return(
      <main>
        <ul className="cards">
          {animalsArray}
        </ul>
      </main>
    );
}

export default AnimalContanier