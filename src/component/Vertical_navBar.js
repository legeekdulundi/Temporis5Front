import {Link} from "react-router-dom";
import Db from "../component/Db"

const Vertical_navBar = () => {
    return (
        <div className="Logo-container">
            <Link  to="/" src="./image/imageLogo.png" className="logo-navBar"></Link>
            <div className="trait" id="trait0"></div>
            <h1 id="titre-recherche-carte">Recherche carte</h1>
            <input className="input-recherche-carte" placeholder="Recherche carte"></input>
            <div className="trait" id="trait1"></div>
            <div id="Add-carte">
                <h1 id="titre-ajout-carte">Ajout Carte</h1>
                <div style={{display:"flex"}}>
                    <input id="input-add-craft" placeholder="Nom nouvelle carte"></input>
                    <button id="button-sub-add-craft">Ajoutée</button>
                </div>
            </div>
            <Db/>
        </div>
    )
}

export default Vertical_navBar
