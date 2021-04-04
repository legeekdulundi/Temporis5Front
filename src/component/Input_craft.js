import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';
const InputCraft = () => {


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
        backgroundColor: "#4a8df6",
        color: "white",
        cursor: "pointer"
      },
      "& li:active": {
        backgroundColor: "#2977f5",
        color: "white"
      }
    }
  }));
  const top100Films = [
    { name: 'The Shawshank ' },
    { name: 'The Godfather' },
    { name: 'The Godfather' },
    { name: 'The Godfather' },
  ];
  return (
    <>
      <div style={{display:"flex",alignItems:"center"}}>
        <InputCarte id={"InputCarte"+1} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 5.5}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+2} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 5.5} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+3} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 5.5} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+4} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 5.5} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
        <div className="operator-style-Home" style={{ "fontSize":"2vw"}}>+</div>
        <InputCarte id={"InputCarte"+5} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 5.5} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
      </div>
      <br/>
      <div className="operator-style-Home" style={{"fontSize":"2vw"}}>=</div>
      < InputCarte id={6} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20+ 0.2} marginLeft="1%" marginRight="1%" placeholder={"Item"}/>
      {/* <button className="button-menu button-craft button-craft" onClick={ShowCraftMenu} >Craft</button> */}
    </>
      
)}
export default InputCraft