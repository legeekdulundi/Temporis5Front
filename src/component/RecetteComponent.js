import React from 'react';

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
const RecetteComponent = () => {
    const top100Films = [
        { name: 'The Shawshank ' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
      ];
    const Show = ()=>{
        let Liste_items =[]
        for (let i=0;i<5;i++){
            i !== 4.7 ? Liste_items.push(
            <React.Fragment  key={"RecetteComponent"+i}>
                <input className="input" id="input-task" disabled="disabled" />
                <h1 className="operator-style">+</h1>
            </React.Fragment>) 
                : Liste_items.push(<React.Fragment key={"RecetteComponent"+i}><input className="input" id="input-task" disabled="disabled"/><h1 className="operator-style" >=</h1></React.Fragment>)
        }
        return Liste_items
    }

    return (
        <>
            <div className="porteur-all-data-craft" style={{"height":"120px"}}>
                <div className="data-craft-containeure" >
                    {/* {Show()} */}
                    <InputCarte id={"InputRechercheCarte"} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-4.7}  marginLeft="1%" marginRight="1%" disabled="disabled"/>
                    <h1 className="operator-style">+</h1>
                    <InputCarte id={"InputRechercheCarte"} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-4.7}  marginLeft="1%" marginRight="1%" disabled="disabled"/>
                    <h1 className="operator-style">+</h1>
                    <InputCarte id={"InputRechercheCarte"} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-4.7}  marginLeft="1%" marginRight="1%" disabled="disabled"/>
                    <h1 className="operator-style">+</h1>
                    <InputCarte id={"InputRechercheCarte"} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-4.7}  marginLeft="1%" marginRight="1%" disabled="disabled"/>
                    <h1 className="operator-style" >=</h1>
                    <InputCarte id={"InputRechercheCarte"} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-4.7}  marginLeft="1%" marginRight="1%" disabled="disabled"/>
                    <img 
                    src="https://static.ankama.com/dofus/www/game/items/200/2087.png"
                    alt="new"
                    />
                </div>
                <div className="container-edit-craft" >
                    <h1 className="edit-craft" >✕</h1>
                    <h1 className="edit-craft button-modif">✎</h1>
                </div>
            </div>
        </>
    )
}

export default RecetteComponent
