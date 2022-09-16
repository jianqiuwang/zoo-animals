import React, {useEffect, useState} from "react";
import AnimalContanier from "./AnimalContanier";
import Header from "./Header";
import NewContanier from "./NewContanier";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import NewAnimalForm from "./NewAnimalForm";

function App(){
    // const [animals, setAnimals]=useState([])
    // useEffect(()=>{
    //     fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    //     .then((resp)=>resp.json())
    //     .then((animals)=>setAnimals(animals))
    // },[])
   
    return (
        <div className="app" style={{
            backgroundImage: `url(https://www.dallaszoo.com/wp-content/themes/dallaszoo/resources/images/bg-light_giraffe.png)`
        }}>
           <Header/>
           <BrowserRouter>
           <NavBar/>
           <Switch>
            <Route exact path="/ouranimals">
                <NewContanier/>
            </Route>
            <Route exaxt path="/addnewanimals">
                <NewAnimalForm/>
            </Route>
            <Route excat path="/">
                <AnimalContanier />
            </Route>
            </Switch>
           </BrowserRouter>
           
        </div>
    )
    
}

export default App
