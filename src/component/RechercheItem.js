import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input:{
        width: "100%",
        maxHeight:'35px',
        fontSize:"28px",
        outline:"none",
        borderRadius: "15px",
        border: "none",
        background:" rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(100px)"
      },
    listbox: {
      width: "100%",margin: 0,padding: 0,zIndex: 1,position: "absolute",listStyle: "none",overflow: "auto",maxHeight: 200,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      borderRadius: "0 0 10px 10px",
      border: "1px solid rgba(0,0,0,.25)",
      '& li[data-focus="true"]': {
        color: "#f494bf",
        cursor: "pointer"
      },
      "& li:active": {
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(100px)",
        color: "white"
      }
    }
  }));

const Recherche = (props) => {
  var useStyless=useStyles()
      return (
        <>
            <InputCarte subclass="RechercheItemScrollBar-Home" id={"ItemRecette"+1} useStyles={useStyles()} Data={props.ListItem} width="20%" widthList={20+ 0.2} marginLeft="1%" marginRight="1%" placeholder={"Item"} />
            
            <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>=</div>
            <br/>
          <div style={{display:"flex" ,alignItems:"center"}}>

            <InputCarte  id={"CarteRecette"+1} useStyles={useStyless}  width="20%" widthList={20-4.7}  marginLeft="1%" marginRight="1%"
            disabled="disabled" placeholder={props.Recette.carte1} />
            <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
            <InputCarte id={"CarteRecette"+2} useStyles={useStyless}  width="20%" widthList={20-4.7} marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte2}  />
            <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
            <InputCarte id={"CarteRecette"+3} useStyles={useStyless}  width="20%" widthList={20- 4.7} marginLeft="1%" marginRight="1%"
             disabled="disabled" placeholder={props.Recette.carte3} />
            <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
            <InputCarte id={"CarteRecette"+4}useStyles={useStyless}  width="20%" widthList={20- 4.7} marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte4} />
            <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
            <InputCarte id={"CarteRecette"+5} useStyles={useStyless} width="20%" widthList={20- 4.9} marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte5}  />
          </div>
        </>
    )
}

export default Recherche

