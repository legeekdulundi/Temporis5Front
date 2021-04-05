import { useState ,useEffect} from 'react';
import {Link} from "react-router-dom";
import FormulaireNewCraft from "../component/FormulaireNewCraft"
import Recherche from "../component/RechercheItem"


function HomePage(props) {
  const [showAddCraft, setshowAddCraft] = useState(false)
  const [showRecherche, setshowRecherche] = useState(false)
  const [ValueCraftButton, setValueCraftButton] = useState('Craft')
  const [ShowVideo, setShowVideo] = useState(true)
  const [NbrRequest, setNbrRequest] = useState(10)
  const [nbrtest, setnbrtest] = useState(0)
  const [son, setson] = useState("http://localhost:8888/GetSong/1")
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if(props.Status===400 || props.Status===500)
    {
      setson("http://localhost:8888/GetSong/"+NbrRequest)
      document.getElementById("AudioDiv").load()
      setNbrRequest(NbrRequest+1)
      console.log(NbrRequest)
      // document.getElementsByClassName("audio-element")
      const audioEl = document.getElementById("AudioDiv")
      audioEl.pause()
      audioEl.play()
      if(props.RequestStatusFrom!=="/GetCraft")
        document.getElementById("btnCraft").classList.add('Shake-button')
      else
        document.getElementById("btnRecherche").classList.add('Shake-button')
      
      setTimeout(() => {   
        if(props.RequestStatusFrom!=="/GetCraft")
          document.getElementById("btnCraft").classList.remove('Shake-button')
        else
          document.getElementById("btnRecherche").classList.remove('Shake-button')
        props.ResetStatus();
      }, 830);
    }
    else
    {
      const audioEl = document.getElementById("AudioDiv")
      if(audioEl)
        audioEl.pause()
    }
  }, [props.NbrRequest])

  
  function NormalizeString(Param)
  {
    return Param.replaceAll(' ','_').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
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
    
    if(ValueCraftButton==="Craft")
      setValueCraftButton('Envoyer')
    else{
      setValueCraftButton('Craft')
    }
    setshowAddCraft(!showAddCraft)
    showRecherche && setshowRecherche(!showRecherche)
  }
  const ShowRechercheMenu = () =>{
    if(showRecherche)
    {
      if(document.getElementById("ItemRecette1").value){
        props.Rechercherecette({name:NormalizeString(document.getElementById("ItemRecette1").value)})
      }
    }  
    else{
        setshowRecherche(!showRecherche)
    }
    showAddCraft && setshowAddCraft(!showAddCraft); setValueCraftButton('Craft')
  }
  function SpeedIncreas()
  {
    if(document.getElementById("IdVideo")){
      console.log("increase speed")
      document.getElementById("IdVideo").playbackRate=2;
    }
  }
  function RefreshPage()
  {
    props.RefreshPage("GetNewCraft/")
  }

  
  return (
    <>
      {
        <>
        <video id="IdVideo" autoPlay onPlay={SpeedIncreas} muted className="Background-video" onEnded={() => setShowVideo(!ShowVideo)}><source src="http://localhost:8888/GetVideo/" type="video/mp4"></source></video>
        {
          !ShowVideo &&
          <div className="background Fade-in">
            <audio id="AudioDiv" className="audio-element">
                <source  id="SourceAudio"  src={son}></source>
            </audio>
            
            <div className="logo"></div>
            <menu className="Menu" >
              <div  className="flex-clounm-center" >
                {showAddCraft ? <FormulaireNewCraft ListItem={props.ListItem} ListeCarte={props.ListeCarte}/> : HideAddCraft()}
                <button id="btnCraft" className="button-menu button-craft" onClick={ShowCraftMenu} style={{width:"13%"}}>{ValueCraftButton}</button>
                <button id="btnRecherche" className="button-menu" onClick={ShowRechercheMenu} style={{width:"18%"}}>Recherche</button>
                {/* //className="animated shake" classe qui fais chaque  c */}
                {showRecherche && <Recherche Recette={props.Recette} ListItem={props.ListItem}/>}
                <Link  onClick={RefreshPage} to="/BDP" className="button-menu button-Base-donner" style={{width:"25%"}}>Base de donnée</Link>
               
              </div>
            </menu> 
          </div>
        }
        </>
      }
    </>
  );
}

export default HomePage;
