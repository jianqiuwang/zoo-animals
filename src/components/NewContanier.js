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

    const filterArray= newAnimals.filter((newAnimal)=>{
      if(newAnimal.lifespan>40) return true
    })
    
   
  function handleClick(){
    console.log()
    if (!clicked ){
      setClicked(!clicked)
      setNewAnimals(filterArray)
    }else{
      setClicked(!clicked)
      setNewAnimals(allAnimals)
      console.log(allAnimals)
    }
  }

  // function handleAnotherClick(){
  //   console.log(newAnimals)
  // }
    return(
      <main>
        <button onClick={()=>handleClick()}>lifespan greater 40 yr</button>
        {/* <button onClick={()=>handleAnotherClick()}>reset</button> */}
        <p className="note">Animals that we currently have in zoo</p>
        {newAnimalsArray}
      </main>
    );
}


export default NewContanier