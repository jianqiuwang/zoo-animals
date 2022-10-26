import React, { useEffect, useState } from "react";
import NewCard from "./NewCard";
import NewAnimalForm from "./NewAnimalForm";


function NewContanier(){
  const [newAnimals, setNewAnimals]=useState([])
  const [clicked, setClicked]=useState(false)
  const allAnimals=[]

  
  useEffect(()=>{
      fetch("http://localhost:3000/animals")
      .then((resp)=>resp.json())
      .then((newAnimals)=> {
        setNewAnimals(newAnimals)
       let allAnimals=[...newAnimals]
        console.log(allAnimals)
      })
  },[])

//   function handleAddAnimal(newAnimalCard){
//     setNewAnimals([...newAnimals, newAnimalCard])
//   }


  function handleDelete(item){
    const deleteAnimal=newAnimals.filter((newAnimal)=>newAnimal.id!==item.id)
    setNewAnimals(deleteAnimal)
  }

    const newAnimalsArray = newAnimals.map((newAnimal)=><NewCard key={newAnimal.id} newAnimal={newAnimal} onHandleDelete={handleDelete} />)

    
    // const filterArray= newAnimals.filter((newAnimal)=>newAnimal.lifespan>40)

    const filterArray= newAnimals.filter((newAnimal)=> newAnimal.lifespan<25)
    
    
   
  function handleClick(){
    console.log(allAnimals)
    console.log(filterArray)
    if (!clicked ){
      setNewAnimals(allAnimals) 
      console.log("newAnimals", newAnimals)}
      
      else {setNewAnimals(filterArray)
        console.log("filtered",newAnimals)}
      setClicked(!clicked)
  }
    return(
      <main>
        <button onClick={()=>handleClick()}>lifespan less 25 yr</button>
        <p className="note">Animals that we currently have in zoo</p>
        {newAnimalsArray}
      </main>
    );
}


export default NewContanier