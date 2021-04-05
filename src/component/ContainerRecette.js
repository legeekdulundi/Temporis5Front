import RecetteComponent from "./RecetteComponent"
import InputCarte from "./InputAutoComplete"
import { useState} from 'react';
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
        backgroundColor: "#262626",
        color:"#7e7e7e",
        paddingLeft:"10px",
        backdropFilter: "blur(100px)",
        '& input:active': {
          backgroundColor: "red",
          color: "red"
        }
      },
    listbox: {
      width: "100%",margin: 0,padding: 0,zIndex: 1,position: "absolute",listStyle: "none",overflow: "auto",maxHeight: 200,
      backgroundColor: '#262626',
      borderRadius: "0 0 10px 10px",
      border: "1px solid rgba(0,0,0,.25)",
      textAlign:"center",
      color:"#7e7e7e",
      '& li[data-focus="true"]': {
        backgroundColor: "#262626",
        color: "#f494bf",
        cursor: "pointer"
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white"
      },
      
    }
  }));
function NormalizeString(Param)
{
  return Param.replaceAll(' ','_').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
const ContainerRecette = (props) => {

    const Show = ()=>{
        let Liste_items =[];
        for (let i=0;i<props.ListeRecette.length;i++){
            Liste_items.push(<div key={"RecetteComponent"+props.ListeRecette[i].id}  id={"RecetteComponent"+props.ListeRecette[i].id}> 
            <RecetteComponent Recette={props.ListeRecette[i]}   ListeCarte={props.ListeCarte} DeleteItem={props.DeleteItem} ModifItem={props.ModifItem} ListItem={props.ListItem}/></div>);
        };
        return Liste_items;
    }
    const [KeyRecherche, setKeyRecherche] = useState(0);
    function RechercheItem()
    {
      if(document.getElementById("InputRechercheItem") && document.getElementById("InputRechercheItem").value)
      {
        console.log((document.getElementById("InputRechercheItem").value))
        props.GetRecetteWithItem({"name":NormalizeString(document.getElementById("InputRechercheItem").value )})
        setKeyRecherche(KeyRecherche+1)
      }
    }
    
    return (
        <div className="Bg-Bd">
            <nav>
                <InputCarte key={KeyRecherche} id={"InputRechercheItem"} useStyles={useStyles()} Data={props.ListItem} width="30%" widthList={30-4.2}  
                marginLeft="2.5%" marginRight="2%" placeholder="Recherche items" SubClass={"RechercheItemScrollBar"}/>
                <input onClick={RechercheItem} className="input-button Recherche-button" value={"Recherche"} type="submit" style={{"width":"9%"}}/>
            </nav>
            <div id="containeur-all_data">
                {Show()}
            </div>
        </div>
    )
}

export default ContainerRecette
