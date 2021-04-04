import HomePage from "./Pages/HomePage"
import { useState } from 'react';
import DBPage from "./Pages/DBPage"
import {  BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function Manager() {
  const [RecetteRecherche, setRecetteRecherche] = useState([])
  // body: JSON.stringify({ title: 'React POST Request Example' })

  function NewCraft(Craft)
  {
    console.log(Craft)
    fetch('http://localhost:8888/AddCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Craft)
      }).then(res=>res.json())
      .then(function(res) 
      {
        console.log(res);   
      });
  }
  
  function Rechercherecette(Item)
  {
    console.log(Item)
    fetch('http://localhost:8888/GetCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
        setRecetteRecherche(res.liste[0])
        console.log(res);   
      });
  }

// async function fetchMovies() {
//   const response = await fetch('http://localhost:8888/GetCraft/');
//   console.log(response);
// }

  return (
    <Router>
      <Switch> 
        <Route exact path="/">
            <HomePage NewCraft={NewCraft} Rechercherecette={Rechercherecette} Recette={RecetteRecherche}/>
        </Route>
        <Route exact path="/BDP">
            <DBPage />
        </Route>
      </Switch>

    </Router>
  );
}

export default Manager;
