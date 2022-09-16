import React, {useState}from "react"

function AnimalCard({animal}){

    // const [isHovering, setIsHovering] = useState(false)

    // const handleMouseOver = () => {
    //     setIsHovering(true);
    //   };
    
    //   const handleMouseOut = () => {
    //     setIsHovering(false);
    //   };


    return (

        <div className="card">
            <img src={animal.image_link} alt="Animal photo" width="500" height="400"/>
            <div className="info">
                {/* {isHovering&&<><h2>Name: {animal.name} | Latin Name: {animal.latin_name}</h2>
                <h3>Animal Type: {animal.animal_type}</h3>
                <h3>Lifespan: {animal.lifespan} yr</h3>
                <h3>Active Time: {animal.active_time}</h3>
                <h3>Geographic range: {animal.geo_range}</h3>
                <h3>Habitat: {animal.habitat}</h3>
                <h3>Diet: {animal.diet}</h3>
                <h3>Length: {animal.length_min} - {animal.length_max} ft.</h3>
                <h3>Mass: {animal.weight_min} - {animal.weight_max} lbs</h3></>} */}

                <h2>Name: {animal.name} | Latin Name: {animal.latin_name}</h2>
                <h3>Animal Type: {animal.animal_type}</h3>
                <h3>Lifespan: {animal.lifespan} yr</h3>
                <h3>Active Time: {animal.active_time}</h3>
                <h3>Geographic range: {animal.geo_range}</h3>
                <h3>Habitat: {animal.habitat}</h3>
                <h3>Diet: {animal.diet}</h3>
                <h3>Length: {animal.length_min} - {animal.length_max} ft.</h3>
                <h3>Mass: {animal.weight_min} - {animal.weight_max} lbs</h3>
            </div>
            
        </div>
    )

}

export default AnimalCard