const NavBar = () => {
    return (
        <nav>
            <input className="input" id="recherche-craft-by-items" placeholder="Recherche items"></input>
            <input className="input-button" placeholder="Recherche" type="submit" style={{"width":"7%", "height":"45%", "background-color": "#262626", "border":"none"}}/>
        </nav>
    )
}

export default NavBar
