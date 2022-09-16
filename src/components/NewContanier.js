import React, { useEffect, useState } from "react";
import NewCard from "./NewCard";
import NewAnimalForm from "./NewAnimalForm";


function NewContanier(){
  const [newAnimals, setNewAnimals]=useState([])
  useEffect(()=>{
      fetch("http://localhost:3000/animals")
      .then((resp)=>resp.json())
      .then((newAnimals)=>setNewAnimals(newAnimals))
  },[])

//   function handleAddAnimal(newAnimalCard){
//     setNewAnimals([...newAnimals, newAnimalCard])
//   }

  function handleDelete(item){
    const deleteAnimal=newAnimals.filter((newAnimal)=>newAnimal.id!==item.id)
    setNewAnimals(deleteAnimal)
  }

    const newAnimalsArray = newAnimals.map((newAnimal)=><NewCard key={newAnimal.id} newAnimal={newAnimal} onHandleDelete={handleDelete}/>)

    return(
      <main>
        <p className="note">Animals that we currently have in zoo</p>
        {newAnimalsArray}
      </main>
    );
}



export default NewContanier