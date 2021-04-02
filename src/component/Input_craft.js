const InputCraft = () => {
    const Show = ()=>{
        let Liste_items =[]
        for (let i=0;i<5;i++){
            i !== 4 ? Liste_items.push(<><input className="input"/><div className="operator-style">+</div></>) : Liste_items.push(<input className="input"/>)
        }
        return Liste_items
    }

    return (
        <div className="menu-craft">
            <div className="container-input-craft" >
                {
                    Show()
                }
            </div>
            <div className="operator-style" style={{"margin-left": "5%", "font-size":"2vw"}}>=</div>
            <input className="input" id="input-items" ></input>
        </div>
    )
}

export default InputCraft
