const DataCraft = () => {
    const Show = ()=>{
        let Liste_items =[]
        for (let i=0;i<5;i++){
            i !== 4 ? Liste_items.push(<><input className="input" id="input-task" disabled="disabled" /><h1 className="operator-style" style={{"font-size":"1.5vw"}}>+</h1></>) : Liste_items.push(<><input className="input" id="input-task" disabled="disabled"/><h1 className="operator-style" >=</h1></>)
        }
        return Liste_items
    }

    return (
        <>
            <div className="porteur-all-data-craft">
                <div className="data-craft-containeure" >
                    {
                        Show()
                    }
                    <input className="input" id="input-task" disabled="disabled"/>
                    <div className="Photo-items" ></div>
                </div>
                <div style={{"display":"flex", "flex-direction": "column","margin-left": "1.5%"}}>
                    <h1 className="edit-craft">✕</h1>
                    <h1 className="edit-craft">✎</h1>
                </div>
            </div>
        </>
    )
}

export default DataCraft
