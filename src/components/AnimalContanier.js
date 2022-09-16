import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard"
import Search from "./Search";


function AnimalContanier(){
  const [animals, setAnimals]=useState([])
  const [search, setSearch]=useState("")
  useEffect(()=>{
      fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((resp)=>resp.json())
      .then((animals)=>setAnimals(animals))
  },[])

  function handleOnChange(e){
    setSearch(e.target.value)
 }

 const displaySearch=animals.filter((animal)=>animal.name.toLowerCase().includes(search.toLowerCase()))


    const animalsArray = displaySearch.map((animal)=><AnimalCard key={animal.id} animal={animal}/>)

    return(
      <div>
        <p className="note">show 10 random animals, refresh the page to see more animals</p>
        <h3 id='searcher'>Animal Searcher</h3>
        <Search handleOnChange={handleOnChange}/>
          {animalsArray}
      </div>
    );
}

export default AnimalContanier