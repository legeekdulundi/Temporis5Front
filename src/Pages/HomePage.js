import { useState } from 'react';
import {Link} from "react-router-dom";
import Input_craft from "../component/Input_craft"
import Recherche from "../component/Recherche"

function HomePage() {
  const [showAddCraft, setshowAddCraft] = useState(false)
  const [showRecherche, setshowRecherche] = useState(false)

  const style_button_carft = {
    width: "20%",
    height: "25%",
    left: "calc(50% - 234px/2 - 0.48px)",
    top: "calc(50% - 80px/2 - 76px)",
  }
  const style_button_recherche = {
    width: "35%",
    height: "25%",
    left: "calc(50% - 353px/2 + 0.02px)",
    top: "calc(50% - 80px/2 + 19px)",
  }
  const style_button_db = {
    width: "55%",
    height: "25%",
    left: "calc(50% - 451px/2 - 0.98px)",
    top: "calc(50% - 80px/2 + 114px)",
  }

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
          <div className="button-container">
            <button className="button-menu" style={style_button_carft} onClick={ShowCraftMenu} >Craft</button>
            {showAddCraft && <Input_craft/> }
            <button className="button-menu" style={style_button_recherche} onClick={ShowRechercheMenu} >Recherche</button>
            {showRecherche && <Recherche/>}
            <Link to="/BDP" className="button-menu" style={style_button_db} >Base de donnée</Link>
          </div>
        </menu>
      </div>
  );
}

export default HomePage;
