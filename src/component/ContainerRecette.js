import RecetteComponent from "./RecetteComponent"
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
        backgroundColor: "#262626",
        color:"#262626",
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
      }
    }
  }));

const ContainerRecette = () => {
    const top100Films = [
        { name: 'The Shawshank ' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
        { name: 'The Godfather' },
      ];
    const Show = ()=>{
        let Liste_items =[];
        for (let i=0;i<5;i++){
            Liste_items.push(<div key={"RecetteComponent"+i}  id={"RecetteComponent"+i}><RecetteComponent/></div>);
        };
        return Liste_items;
    }

    return (
        <div className="Bg-Bd">
            <nav>
                {/* <input className="input" id="recherche-craft-by-items" placeholder="Recherche items"></input> */}
                <InputCarte id={"InputRechercheItem"} useStyles={useStyles()} Data={top100Films} width="30%" widthList={30-4.2}  marginLeft="2.5%" marginRight="2%" placeholder="Recherche items"/>
                        
                <input className="input-button Recherche-button" placeholder="Recherche" type="submit" style={{"width":"9%"}}/>
            </nav>
            <div id="containeur-all_data">
                {
                    Show()
                }
            </div>
        </div>
    )
}

export default ContainerRecette
