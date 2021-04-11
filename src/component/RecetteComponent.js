import React from 'react';

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
        backdropFilter: "blur(100px)",
        
      },
    //   4.704.704.70
    listbox: {
      width: "100%",margin: 0,padding: 0,zIndex: 1,position: "absolute",listStyle: "none",overflow: "auto",maxHeight: 200,
      backgroundColor: '#333333',
      borderRadius: "0 0 10px 10px",
      border: "1px solid rgba(0,0,0,.25)",
      textAlign:"center",
      color:"#7e7e7e",
      '& li[data-focus="true"]': {
        backgroundColor: "#333333",
        color: "#f4.794.7bf",
        cursor: "pointer"
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white"
      }
    }
  }));
function NormalizeString(Param)
{
  return Param.replaceAll(' ','_').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
const RecetteComponent = (props) => {
    const [isModif, setisModif] = useState(false);
    
    function SuprressionItem()
    {
      console.log(props.Recette.id)
      if(props.Recette.id)
        props.DeleteItem({"id":props.Recette.id})
    }

    function getElementById(Id)
    {
      return document.getElementById(Id)
    }
    function ModifItem()
    {
      
      if(isModif)
      {

        let Carte1= getElementById("carte1"+props.Recette.id).value ? getElementById("carte1"+props.Recette.id).value : getElementById("carte1"+props.Recette.id).placeholder
        let Carte2= getElementById("carte2"+props.Recette.id).value ? getElementById("carte2"+props.Recette.id).value : getElementById("carte2"+props.Recette.id).placeholder
        let Carte3= getElementById("carte3"+props.Recette.id).value ? getElementById("carte3"+props.Recette.id).value : getElementById("carte3"+props.Recette.id).placeholder
        let Carte4= getElementById("carte4"+props.Recette.id).value ? getElementById("carte4"+props.Recette.id).value : getElementById("carte4"+props.Recette.id).placeholder
        let Carte5= getElementById("carte5"+props.Recette.id).value ? getElementById("carte5"+props.Recette.id).value : getElementById("carte5"+props.Recette.id).placeholder
        let Item= getElementById("item"+props.Recette.id).value ? getElementById("item"+props.Recette.id).value : getElementById("item"+props.Recette.id).placeholder
        
        props.ModifItem({"carte1":NormalizeString(Carte1),"carte2":NormalizeString(Carte2),"carte3":NormalizeString(Carte3),"carte4":NormalizeString(Carte4),
        "carte5":NormalizeString(Carte5),"items":NormalizeString(Item),"id":props.Recette.id})
        setisModif(!isModif) 
      }
      else
        setisModif(!isModif)
      
      // if(props.Recette.id)
      // {
      //   // props.ModifItem({"carte1": "carte17","carte2": "carte2","carte3": "carte3","carte4": "carte4","carte5": "carte5","items": "anneau_de_sagesse","id":0})
    
      // }
    }
    // console.log(props.Recette)
    const useStyle=useStyles();
    return (
        <>
            <div className="porteur-all-data-craft zoom">
              <div className="data-craft-containeure" >
                  
                  {
                      isModif?
                      <InputCarte key={"carte1"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte1"+props.Recette.id} useStyles={useStyle} 
                      height="90px" width="20%" widthList={12.2} marginLeft="0.5%" marginRight="0.5%"  Data={props.ListeCarte} placeholder={props.Recette.carte1}/>
                       :
                       <InputCarte key={"carte1"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte1"} useStyles={useStyle} width="20%" widthList={20-9} height="50px"
                       paddingTop="15px" marginLeft="0.5%" marginRight="0.5%" disabled="disabled" placeholder={props.Recette.carte1.replaceAll('_',' ')} />
                  }
                  <h1 className="operator-style-Component">+</h1>
                  {
                      isModif?
                      <InputCarte key={"carte2"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte2"+props.Recette.id} useStyles={useStyle} height="90px" width="20%" widthList={12.2}
                       marginLeft="0.5%" marginRight="0.5%"  Data={props.ListeCarte}  placeholder={props.Recette.carte2}/>
                       :
                       <InputCarte key={"carte2"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte2"+props.Recette.id} useStyles={useStyle} width="20%" widthList={20-9} height="50px"
                       paddingTop="15px" marginLeft="0.5%" marginRight="0.5%" disabled="disabled" placeholder={props.Recette.carte2.replaceAll('_',' ')} />
                  }
                  
                  <h1 className="operator-style-Component">+</h1>
                  
                  {
                      isModif?
                      <InputCarte key={"carte3"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte3"+props.Recette.id} useStyles={useStyle} height="90px" width="20%" widthList={12.2}
                       marginLeft="0.5%" marginRight="0.5%"  Data={props.ListeCarte}  placeholder={props.Recette.carte3}/>
                       :
                       <InputCarte key={"carte3"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte3"+props.Recette.id} useStyles={useStyle} width="20%" widthList={20-9} height="50px"
                       paddingTop="15px" marginLeft="0.5%" marginRight="0.5%" disabled="disabled" placeholder={props.Recette.carte3.replaceAll('_',' ')} />
                  }
                  
                  <h1 className="operator-style-Component">+</h1>
                  
                  {
                      isModif?
                      <InputCarte key={"carte4"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte4"+props.Recette.id} useStyles={useStyle} height="90px" width="20%" widthList={12.2}
                       marginLeft="0.5%" marginRight="0.5%"  Data={props.ListeCarte}  placeholder={props.Recette.carte4}/>
                       :
                       <InputCarte key={"carte4"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte4"+props.Recette.id} useStyles={useStyle} width="20%" widthList={20-9} height="50px"
                       paddingTop="15px" marginLeft="0.5%" marginRight="0.5%" disabled="disabled" placeholder={props.Recette.carte4.replaceAll('_',' ')} />
                  }
                  
                  
                  <h1 className="operator-style-Component">+</h1>
                  
                  {
                      isModif?
                      <InputCarte key={"carte5"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"}  id={"carte5"+props.Recette.id} useStyles={useStyle} height="90px" width="20%" widthList={12.2}
                       marginLeft="0.5%" marginRight="0.5%"  Data={props.ListeCarte}  placeholder={props.Recette.carte5}/>
                       :
                       <InputCarte key={"carte5"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"carte5"+props.Recette.id} useStyles={useStyle} width="20%" widthList={20-9} height="50px"
                       paddingTop="15px" marginLeft="0.5%" marginRight="0.5%" disabled="disabled" placeholder={props.Recette.carte5.replaceAll('_',' ')} />
                  }
                  <h1 className="operator-style-Component" >=</h1>
                  {
                    isModif?
                    <InputCarte key={"item"+props.Recette.id+isModif} subclass={"RechercheItemScrollBar-BDD"} id={"item"+props.Recette.id} useStyles={useStyle} height="90px" width="20%" widthList={12.25} 
                      marginLeft="0.5%" marginRight="0.5%"  Data={props.ListItem} placeholder={props.Recette.items.replaceAll('_',' ')}/>
                    :
                    <InputCarte key={"item"+props.Recette.id+isModif}  subclass={"RechercheItemScrollBar-BDD"} id={"item"+props.Recette.id} useStyles={useStyle} height="90px" width="20%" 
                      marginLeft="0.5%" marginRight="0.5%" disabled="disabled" placeholder={props.Recette.items.replaceAll('_',' ')} />
                  }
                  <img 
                      src={"http://localhost:8888/GetImageItems/"+ props.Recette.items }
                      alt={props.Recette.items}
                      className="Image-Items"
                    />
              </div>
              <div className="container-edit-craft" >
                 
                  {
                    isModif?
                    <h1 className="edit-craft verif-button" onClick={ModifItem} >✓</h1>:
                    <>
                      <h1 className="edit-craft supprime" onClick={SuprressionItem} >✕</h1>
                      <h1 className="edit-craft button-modif" onClick={ModifItem} >✎</h1> 
                    </>
                    
                  }
              </div>
            </div>
        </>
    )
}

export default RecetteComponent
