import React, {useEffect, useState} from "react";
import AnimalContanier from "./AnimalContanier"

function App(){
    const [animals, setAnimals]=useState([])
    
    useEffect(()=>{
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .then((resp)=>resp.json())
        .then((animals)=>setAnimals(animals))
    },[])

   console.log(animals)

    if(!animals) return <p>Loading...</p>
  

    return (
        <div className="app">
           <AnimalContanier animals={animals}/>
        </div>
    )
    
}

export default App
