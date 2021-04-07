import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';

const InputCraft = (props) => {

  const useStyles = makeStyles((theme) => ({
    input:{
      width: "100%",
      maxHeight:'35px',
      fontSize:"25px",
      outline:"none",
      borderRadius: "15px",
      border: "none",
      background:" rgba(255, 255, 255, 0.75)",
      backdropFilter: "blur(100px)",
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



  return (
    <>
      <div className="NewCraftContenaire">
        <InputCarte id={"InputCarte"+1} subclass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width={props.matches ? "20%" : "70%"} widthList={props.matches ? 16.9 : 63.7}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" >+</div>
        <InputCarte id={"InputCarte"+2} subclass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width={props.matches ? "20%" : "70%"} widthList={props.matches ? 16.9 : 63.7}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" >+</div>
        <InputCarte id={"InputCarte"+3} subclass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width={props.matches ? "20%" : "70%"} widthList={props.matches ? 16.9 : 63.7}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" >+</div>
        <InputCarte id={"InputCarte"+4} subclass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width={props.matches ? "20%" : "70%"} widthList={props.matches ? 16.9 : 63.7}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" >+</div>
        <InputCarte id={"InputCarte"+5} subclass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width={props.matches ? "20%" : "70%"} widthList={props.matches ? 16.9 : 63.7}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
      </div>
      <div className="operator-style-Home" >=</div>
      < InputCarte subclass="RechercheItemScrollBar-Home" id={"ItemCraft"} useStyles={useStyles()} Data={props.ListItem} width={props.matches ? "30%" : "80%"} widthList={props.matches ? 30.18 : 80.7} marginLeft="1%" marginRight="1%" placeholder={"Item"}/>
    </>
      
)}
export default InputCraft