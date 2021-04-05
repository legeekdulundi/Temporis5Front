import {Link} from "react-router-dom";
import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';
import { useState} from 'react';
const useStyles = makeStyles((theme) => ({
    input:{
        width: "100%",
        maxHeight:'35px',
        height:"200px",
        fontSize:"20px",
        textAlign: "left",
        outline:"none",
        borderRadius: "15px",
        border: "none",
        background:" rgba(255, 255, 255, 0.75)",
        backgroundColor: "#333333",
        color:"#7e7e7e",
        paddingLeft:"3px",
        backdropFilter: "blur(100px)"
      },
    //   404040
    listbox: {
      width: "100%",margin: 0,padding: 0,zIndex: 1,position: "absolute",listStyle: "none",overflow: "auto",maxHeight: 200,
      backgroundColor: '#333333',
      borderRadius: "0 0 10px 10px",
      border: "1px solid rgba(0,0,0,.25)",
      textAlign:"center",
      color:"#7e7e7e",
      '& li[data-focus="true"]': {
        backgroundColor: "#333333",
        color: "#f494bf",
        cursor: "pointer"
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white"
      }
    }
  }));
const VerticalNavBarre = (props) => {


  const [IdInput, setIdInput] = useState(2);
  const [IdInputRecherche, setIdInputRecherche] = useState(100);
  const [RedkSong, setRedkSong] = useState(false);

  function SongPlay(){
    setRedkSong(!RedkSong)
  }

  function PlaySong(Play){
    if (Play === true){
      const audioEl = document.getElementsByClassName("audio-element-red-song")[0]
      if(audioEl)
        audioEl.play()
    }
    else{
      const audioEl = document.getElementsByClassName("audio-element-red-song")[0]
      if(audioEl)
        audioEl.pause()
    }
  }

  function OnClickListen()
  {
    if(document.getElementById("InputAddCarte2") && document.getElementById("InputAddCarte2").value)
    {
      console.log(document.getElementById("InputAddCarte2").value)
      props.AddCarte({"name":document.getElementById("InputAddCarte2").value,"nivCarte":""})
      // document.getElementById("InputAddCarte2").value=null;
      setIdInput(IdInput+1)
    }
  }
  function OnClickListenRecherche()
  {
    if(document.getElementById("InputAddCarte1") && document.getElementById("InputAddCarte1").value)
    {
      console.log(document.getElementById("InputAddCarte1").value)
       props.GetRecetteWithCarte({"name":document.getElementById("InputAddCarte1").value,"NivCarte":""})
      // props.AddCarte({"name":document.getElementById("InputAddCarte2").value,"nivCarte":""})
      // document.getElementById("InputAddCarte2").value=null;
      setIdInputRecherche(IdInputRecherche+1)
    }
  }
  
    return (
        <div className="nav-vertical-containeure">
            <Link  to="/" src="./image/imageLogo.png" className="logo" id="logo-navBar"></Link>
            <div className="contenant-add-recherche-cart">
                 <div style={{"display": "flex", "flexDirection": "column"}}>
                    <h1 className="titre-verticalNav">Recherche Carte</h1>
                    <div style={{display:"flex"}}>
                        <InputCarte key={IdInputRecherche} id={"InputAddCarte1"} subclass={"RechercheItemScrollBar-Vertical"} useStyles={useStyles()} Data={props.ListeCarte} width="100%" widthList={50-1.7}  
                        marginLeft="1%" marginRight="10%" placeholder=" carte"/>
                        <input id="ButtonRecherche" onClick={OnClickListenRecherche} className="input-button" type="submit" value={"Rechercher"} style={{width:"44%"}}/>
                    </div>
                </div>
                {/* <input className="input" id="input-add-craft" placeholder="Recherche carte" style={{"margin-bottom" : "25%"}}/> */}
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <h1 className="titre-verticalNav">Ajout Carte</h1>
                    <div style={{display:"flex"}}>
                        <InputCarte key={IdInput} id={"InputAddCarte2"} subclass={"RechercheItemScrollBar-Vertical"} useStyles={useStyles()} Data={props.ListeCarte} width="60%" widthList={60-1.3} 
                         marginLeft="1%" marginRight="10%" placeholder=" carte"/>
                        <input id="ButtonAjout" onClick={OnClickListen} className="input-button" type="submit"  value={"Ajouter"}/>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", "flexDirection":"column", "marginLeft":"44%"}}>
            <div style={{display:"flex", "flexDirection":"row"}}>
                <a className="title-producteure" target="blank" href="https://www.twitch.tv/redklebg/clip/VivaciousGenerousTruffleKlappa?filter=clips&range=all&sort=time ">Design By RedK</a>
                <h1 className="song" target="blank" onClick={SongPlay}>♫</h1>
                <audio className="audio-element-red-song">
                    <source src="http://localhost:8888/GetSongRedkBebe/" ></source>
                </audio>
                {
                  RedkSong === true ? PlaySong(true) : PlaySong(false)
                }
              </div>
              <a className="title-producteure" target="blank" href="https://www.google.com/search?q=BEAU+GOSSE&sxsrf=ALeKk03ZNaa3qMiG8qIZCbe6u5mA6-kaMQ:1617558689236&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiwz8zYk-XvAhUM8BoKHcWaBdcQ_AUoAXoECAEQAw&cshid=1617558761117586&biw=1920&bih=937#imgrc=fIuhv4X4aG4xoM">Code By LeGeek du Lundi</a>
            </div>
           </div>
    )
}

export default VerticalNavBarre
