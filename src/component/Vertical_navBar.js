import {Link} from "react-router-dom";
import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';

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
const VerticalNavBarre = () => {
    const top100Films = [
        { name: 'The Shawshank ' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
      ];
    return (
        <div className="nav-vertical-containeure">
            <Link  to="/" src="./image/imageLogo.png" className="logo" id="logo-navBar"></Link>
            <div className="contenant-add-recherche-cart">
                <h1 className="titre-verticalNav">Recherche carte</h1>
                <InputCarte id={"InputRechercheCarte"} useStyles={useStyles()} Data={top100Films} width="85%" widthList={85-3.5}  marginLeft="1%" marginRight="1%" placeholder="Carte"/>
                
                {/* <input className="input" id="input-add-craft" placeholder="Recherche carte" style={{"margin-bottom" : "25%"}}/> */}
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <h1 className="titre-verticalNav">Ajout Carte</h1>
                    <div style={{display:"flex"}}>
                        <InputCarte id={"InputAddCarte"} useStyles={useStyles()} Data={top100Films} width="80%" widthList={60-1.5}  marginLeft="1%" marginRight="10%" placeholder=" carte"/>
                        <input className="input-button" type="submit" placeholder="Ajoutée"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerticalNavBarre
