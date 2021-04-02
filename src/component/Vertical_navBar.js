import {Link} from "react-router-dom";

const VerticalNavBarre = () => {
    return (
        <div className="nav-vertical-containeure">
            <Link  to="/" src="./image/imageLogo.png" className="logo" id="logo-navBar"></Link>
            <div className="contenant-add-recherche-cart">
                <h1 className="titre-verticalNav">Recherche carte</h1>
                <input className="input" id="input-add-craft" placeholder="Recherche carte" style={{"margin-bottom" : "25%"}}/>
                <div style={{"display": "flex", "flex-direction": "column"}}>
                    <h1 className="titre-verticalNav">Ajout Carte</h1>
                    <div style={{display:"flex"}}>
                        <input className="input" id="input-add-craft" placeholder="Nom nouvelle carte"/>
                        <input className="input-button" type="submit" placeholder="Ajoutée"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerticalNavBarre
