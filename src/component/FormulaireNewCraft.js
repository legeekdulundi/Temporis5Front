import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';
const InputCraft = (props) => {


  const useStyles = makeStyles((theme) => ({
    input:{
      width: "100%",
      maxHeight:'35px',
      fontSize:"28px",
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


  console.log(props.ListeCarte)
  return (
    <>
      <div style={{display:"flex",alignItems:"center"}}>
        <InputCarte id={"InputCarte"+1} SubClass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width="20%" widthList={20- 4.7}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+2} SubClass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width="20%" widthList={20- 4.7} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+3} SubClass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width="20%" widthList={20- 4.7} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" SubClass="RechercheItemScrollBar-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+4} SubClass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width="20%" widthList={20-4.7} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+5} SubClass="RechercheItemScrollBar-Home" useStyles={useStyles()} Data={props.ListeCarte} width="20%" widthList={20- 4.7} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
      </div>
      <br/>
      <div className="operator-style-Home" style={{"fontSize":"2vw"}}>=</div>
      < InputCarte SubClass="RechercheItemScrollBar-Home" id={"ItemCraft"} useStyles={useStyles()} Data={props.ListItem} width="30%" widthList={30+ 0.2} marginLeft="1%" marginRight="1%" placeholder={"Item"}/>
    </>
      
)}
export default InputCraft