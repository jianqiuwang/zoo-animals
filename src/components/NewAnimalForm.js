import React, {useState} from "react";

function NewAnimalForm({handleAddAnimal}){
    const [name, setName]=useState("")
    const [imagelink, setImageLink]=useState("")
    const [animalType, setAnimalType]=useState("")
    const [lifespan, setLifespan]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/animals",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                name:name,
                image_link:imagelink,
                animal_type:animalType,
                lifespan:lifespan,
            })
        })
        .then(resp=>resp.json())
        .then(data=>handleAddAnimal(data))

    }
    return (
        <>
        <p class="note">help to add new aniamls</p>
        <div className="new-animal-form">
            <h2>New Animal</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Animal name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" name="image" placeholder="Image URL" onChange={(e)=>setImageLink(e.target.value)}/>
                <input type="text" name="animalType" placeholder="Animal type" onChange={(e)=>setAnimalType(e.target.value)}/>
                <input type="number" name="lifespan" step="1" placeholder="Animal lifespan" onChange={(e)=>setLifespan(e.target.value)}/>
                <button type="submit">Add Animal</button>
            </form>
        </div>
        </>
    )
}

export default NewAnimalForm