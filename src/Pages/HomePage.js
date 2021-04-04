import { useState ,useEffect} from 'react';
import {Link} from "react-router-dom";
import InputCraft from "../component/NewCraft"
import Recherche from "../component/RechercheItem"

function HomePage(props) {
  const [showAddCraft, setshowAddCraft] = useState(false)
  const [showRecherche, setshowRecherche] = useState(false)
  const [ValueCraftButton, setValueCraftButton] = useState('Craft')
  function NormalizeString(Param)
  {
    return Param.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
  }
  function HideAddCraft()
  {
    if(document.getElementById("InputCarte1"))
    {
      let Carte1=document.getElementById("InputCarte1").value;
      let Carte2=document.getElementById("InputCarte2").value;
      let Carte3=document.getElementById("InputCarte3").value;
      let Carte4=document.getElementById("InputCarte4").value;
      let Carte5=document.getElementById("InputCarte5").value;
      let Item=document.getElementById("ItemCraft").value;
      if(Carte1 && Carte2 && Carte3 && Carte4 && Carte5 && Item)
      {
         props.NewCraft({"carte1":NormalizeString(Carte1),"carte2":NormalizeString(Carte2),"carte3":NormalizeString(Carte3),"carte4":NormalizeString(Carte4),"carte5":NormalizeString(Carte5),"items":NormalizeString(Item)})
      }
    }
  }
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
    if(showRecherche)
    {
      if(document.getElementById("ItemRecette1")){
        props.Rechercherecette({name:NormalizeString(document.getElementById("ItemRecette1").value)})
      }
    }  
    else{
        setshowRecherche(!showRecherche)
    }
    showAddCraft && setshowAddCraft(!showAddCraft); setValueCraftButton('Craft')
  }
 
  
  return (
      <div className="background">
        <div className="logo"></div>
        <menu className="Menu" >
          <div  className="flex-clounm-center" >
            <button id="btnCraft" className="button-menu button-craft" onClick={ShowCraftMenu} style={{width:"15%"}}>{ValueCraftButton}</button>
            {showAddCraft ? <InputCraft/> : HideAddCraft()}
            <button className="button-menu button-recherche" onClick={ShowRechercheMenu} >Recherche</button>
            {showRecherche && <Recherche Recette={props.Recette} />}
            <Link to="/BDP" className="button-menu button-Base-donner" style={{width:"30%"}}>Base de donnée</Link>
          </div>
        </menu>
      </div>
  );
}

export default HomePage;
