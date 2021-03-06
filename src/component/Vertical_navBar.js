import {Link} from "react-router-dom";
import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';
import { useState} from 'react';

const useStyles = makeStyles((theme) => ({
    input:{
        width: "100%",
        maxHeight:'35px',
        height:"200px",
        fontSize:"18px",
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


  const [IdInputRecherche, setIdInputRecherche] = useState(100);


  function PlaySong(){
    const audio = document.getElementById("RedSong");
    if(audio?.paused)
      audio.play();
    else if(audio)
      audio.pause();
  }

  function RestartSong(){
    const audio = document.getElementById("RedSong");
    audio.currentTime = 0;
  }
  function NormalizeString(Param)
  {
    return Param.replaceAll(' ','_').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function OnClickListenRecherche()
  {
    if(document.getElementById("InputAddCarte1") && document.getElementById("InputAddCarte1").value)
    {
      console.log(document.getElementById("InputAddCarte1").value)
       props.GetRecetteWithCarte({"name":NormalizeString(document.getElementById("InputAddCarte1").value),"NivCarte":""})
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
                        <InputCarte key={IdInputRecherche} id={"InputAddCarte1"} subclass={"RechercheItemScrollBar-Vertical"} useStyles={useStyles()} Data={props.ListeCarte} width="100%" widthList={60.2}  
                        marginLeft="1%" marginRight="3%" placeholder=" carte"/>
                        <input id="ButtonRecherche" onClick={OnClickListenRecherche} className="input-button" type="submit" value={"Rechercher"} style={{width:"34%"}}/>
                    </div>
                </div>
            </div>
            <div style={{display:"flex", "flexDirection":"column", "marginLeft":"44%"}}>
            <div style={{display:"flex", "flexDirection":"row"}}>
                <a className="title-producteure" target="blank" href="https://www.twitch.tv/redklebg/clip/VivaciousGenerousTruffleKlappa?filter=clips&range=all&sort=time ">Design By RedK</a>
                <h1 className="song" target="blank" onClick={PlaySong} onDoubleClick={RestartSong} >???</h1>
                <audio id="RedSong">
                    <source src="http://localhost:8888/GetSongRedkBebe/" ></source>
                </audio>
              </div>
              <a className="title-producteure" target="blank" href="https://www.google.com/search?q=BEAU+GOSSE&sxsrf=ALeKk03ZNaa3qMiG8qIZCbe6u5mA6-kaMQ:1617558689236&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiwz8zYk-XvAhUM8BoKHcWaBdcQ_AUoAXoECAEQAw&cshid=1617558761117586&biw=1920&bih=937#imgrc=fIuhv4X4aG4xoM">Code By LeGeek du Lundi</a>
            </div>
           </div>
    )
}

export default VerticalNavBarre
