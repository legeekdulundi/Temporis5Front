import InputCarte from "./InputAutoComplete"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
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

const Recherche = () => {


    const top100Films = [
        { name: 'The Shawshank ' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
      ];
      return (
        <>
            <InputCarte id={6} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 1.4} marginLeft="42%" marginRight="1%" placeholder={"Item"}/>
            
            <div className="operator-style" style={{"marginLeft": "5%", "fontSize":"2vw"}}>=</div>
            <br/>
            <div style={{display:"flex"}}>
                <InputCarte id={1} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-3.2}  marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
                <InputCarte id={2} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20-3.2} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
                <InputCarte id={3} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 3.2} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
                <InputCarte id={4} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 3.2} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
                <InputCarte id={5} useStyles={useStyles()} Data={top100Films} width="20%" widthList={20- 3.2} marginLeft="1%" marginRight="1%" placeholder={"Carte"}/>
            </div>
        </>
    )
}

export default Recherche
