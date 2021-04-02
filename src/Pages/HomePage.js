import { useState } from 'react';
import {Link} from "react-router-dom";
import InputCraft from "../component/Input_craft"
import Recherche from "../component/Recherche"


function HomePage() {
  const [showAddCraft, setshowAddCraft] = useState(false)
  const [showRecherche, setshowRecherche] = useState(false)
  
  const ShowCraftMenu = ()=>{
    setshowAddCraft(!showAddCraft)
    showRecherche && setshowRecherche(!showRecherche)
  }
  const ShowRechercheMenu = () =>{
    setshowRecherche(!showRecherche)
    showAddCraft && setshowAddCraft(!showAddCraft)
  }
 
  
  return (
      <div className="background">
        <div className="logo"></div>
        <menu className="Menu">
          <div className="flex-clounm-center" id="button-container">
            
            <button className="button-menu" id="button-craft" onClick={ShowCraftMenu} >Craft</button>
            {showAddCraft && <InputCraft/> }
            <button className="button-menu" id="button-recherche" onClick={ShowRechercheMenu} >Recherche</button>
            {showRecherche && <Recherche/>}
            <Link to="/BDP" className="button-menu" id="button-Base-donner" >Base de donnée</Link>
          </div>
        </menu>
      </div>
  );
}

export default HomePage;
