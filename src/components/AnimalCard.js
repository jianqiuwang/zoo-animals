import React from "react"

function AnimalCard({animal}){
    console.log(animal)
    return (
        <div>
            <img src={animal.image_link} width="500" height="400"/>
        </div>
    )

}

export default AnimalCard