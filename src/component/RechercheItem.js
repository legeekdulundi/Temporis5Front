import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';


const Recherche = (props) => {
  const useStyles = makeStyles((theme) => ({
    input:{
        width: "100%",
        maxHeight:props.matches ? '35px' : "27px",
        fontSize:props.matches ? "28px" : "21px",
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

  var useStyless=useStyles()
      return (
        <>
          <InputCarte subclass="RechercheItemScrollBar-Home" id={"ItemRecette"+1} useStyles={useStyles()} Data={props.ListItem} width={props.matches ? "30%" : "80%"} widthList={props.matches ? 30.18 : 80.7} marginLeft="1%" marginRight="1%" placeholder={"Item"} />
          <div className="operator-style-Home" >=</div>
          
          <div className="NewCraftContenaire">
            <InputCarte  id={"CarteRecette"+1} useStyles={useStyless}  width={props.matches ? "20%" : "100%"} widthList={props.matches ? 16.75 : 79}  marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte1} />
            <div className="operator-style-Home" >+</div>
            <InputCarte id={"CarteRecette"+2} useStyles={useStyless}  width={props.matches ? "20%" : "100%"} widthList={props.matches ? 16.75 : 79} marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte2}  />
            <div className="operator-style-Home" >+</div>
            <InputCarte id={"CarteRecette"+3} useStyles={useStyless}  width={props.matches ? "20%" : "100%"} widthList={props.matches ? 16.75 : 79} marginLeft="1%" marginRight="1%"
             disabled="disabled" placeholder={props.Recette.carte3} />
            <div className="operator-style-Home" >+</div>
            <InputCarte id={"CarteRecette"+4}useStyles={useStyless}  width={props.matches ? "20%" : "100%"} widthList={props.matches ? 16.75 : 79} marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte4} />
            <div className="operator-style-Home" >+</div>
            <InputCarte id={"CarteRecette"+5} useStyles={useStyless} width={props.matches ? "20%" : "100%"} widthList={props.matches ? 16.75 : 79} marginLeft="1%" marginRight="1%" 
            disabled="disabled" placeholder={props.Recette.carte5}  />
          </div>
        </>
    )
}

export default Recherche

