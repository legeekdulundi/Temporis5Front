import { useState ,useEffect} from 'react';
import {Link} from "react-router-dom";
import InputCraft from "../component/Input_craft"
import Recherche from "../component/ButtonRecherche"

function HomePage(props) {
  const [showAddCraft, setshowAddCraft] = useState(false)
  const [showRecherche, setshowRecherche] = useState(false)
  const [ValueCraftButton, setValueCraftButton] = useState('Craft')

  useEffect(() => {
   
    if(!showAddCraft)
    {
      console.log("--------------------------------------------")
      console.log(document.getElementById("InputCarte1"))
      if(document.getElementById("InputCarte1"))
      {
        console.log(document.getElementById("InputCarte1"))
        
      }
      
    //   {
    //     {
    //       "carte1":"CartePiou",
    //       "carte2":"CarteKamas",
    //       "carte3":"CarteBle",
    //       "carte4":"CartePain",
    //       "carte5":"CarteBouftou",
    //     }
    // }
      //props.NewCraft()
    }
    return ""
  }, [ValueCraftButton])
  const ShowCraftMenu = (e)=>{
    console.log(e.target.innerText)
    //Verif Status
    if(ValueCraftButton==="Craft")
      setValueCraftButton('Envoyer')
    else{
      setValueCraftButton('Craft')
    }
    setshowAddCraft(!showAddCraft)
    showRecherche && setshowRecherche(!showRecherche)
  }
  const ShowRechercheMenu = () =>{
    // setshowRecherche(!showRecherche)
    
    if(!showRecherche)
      setshowRecherche(!showRecherche)
    showAddCraft && setshowAddCraft(!showAddCraft); setValueCraftButton('Craft')
  }
 
  
  return (
      <div className="background">
        <div className="logo"></div>
        <menu className="Menu" >
          <div  className="flex-clounm-center" >
            <button id="btnCraft" className="button-menu button-craft" onClick={ShowCraftMenu} style={{width:"15%"}}>{ValueCraftButton}</button>
            {showAddCraft && <InputCraft/> }
            <button className="button-menu button-recherche" onClick={ShowRechercheMenu} >Recherche</button>
            {showRecherche && <Recherche/>}
            <Link to="/BDP" className="button-menu button-Base-donner" style={{width:"30%"}}>Base de donnée</Link>
          </div>
        </menu>
      </div>
  );
}

export default HomePage;
