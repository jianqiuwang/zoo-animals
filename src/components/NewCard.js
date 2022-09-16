import React from "react";

function NewCard({newAnimal, onHandleDelete}){
    function handleAnimalDelete(){
        fetch(`http://localhost:3000/animals/${newAnimal.id}`,{
          method: "DELETE"
        })
        .then(resp=>resp.json())
        .then(()=>onHandleDelete(newAnimal))
      }
    return (
        <div className="card">
            <img src={newAnimal.image_link} alt="Animal photo" width="500" height="400"/>
            <div className="info">
                <h3>Name: {newAnimal.name} | Latin Name: {newAnimal.latin_name}</h3>
                <h3>Animal Type: {newAnimal.animal_type}</h3>
                <h3>Lifespan: {newAnimal.lifespan} yr</h3>
                {/* <h3>Active Time: {newAnimal.active_time}</h3>
                <h3>Geographic range: {newAnimal.geo_range}</h3>
                <h3>Habitat: {newAnimal.habitat}</h3>
                <h3>Diet: {newAnimal.diet}</h3>
                <h3>Length: {newAnimal.length_min} - {newAnimal.length_max} ft.</h3>
                <h3>Mass: {newAnimal.weight_min} - {newAnimal.weight_max} lbs</h3> */}
                <button id="btn" onClick={handleAnimalDelete} className="del-btn">Delete</button>
            </div>
        </div>
    )

}

export default NewCard