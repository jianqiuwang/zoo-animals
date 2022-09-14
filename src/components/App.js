import React, {useEffect, useState} from "react";
import AnimalContanier from "./AnimalContanier"
import Header from "./Header";

function App(){
    const [animals, setAnimals]=useState([])
    
    useEffect(()=>{
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
        .then((resp)=>resp.json())
        .then((animals)=>setAnimals(animals))
    },[])
  
    return (
        <div className="app" style={{
            backgroundImage: `url(https://www.dallaszoo.com/wp-content/themes/dallaszoo/resources/images/bg-light_giraffe.png)`
        }}>
            <Header/>
           <AnimalContanier animals={animals}/>
        </div>
    )
    
}

export default App
