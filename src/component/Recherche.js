const Recherche = () => {
    const Show = ()=>{
        let Liste_items =[]
        for (let i=0;i<5;i++){
            i !== 4 ? Liste_items.push(<><input className="input" disabled="disabled" /><div className="operator-style">+</div></>) : Liste_items.push(<input className="input" disabled="disabled" />)
        }
        return Liste_items
    }
    return (
        <div className="menu-craft">
            <input className="input" id="input-items"></input>
            <div className="operator-style" style={{"margin-left": "5%", "font-size":"2vw"}}>=</div>
            <div className="container-input-craft">
                {
                    Show()
                }
            </div>
        </div>
    )
}

export default Recherche
