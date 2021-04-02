import DataCraft from "./Data_craft"

const PanelData = () => {
    const Show = ()=>{
        let Liste_items =[];
        for (let i=0;i<5;i++){
            Liste_items.push(<><DataCraft/></>);
        };
        return Liste_items;
    }

    return (
        <div id="containeur-all_data">
            {
                Show()
            }
        </div>
    )
}

export default PanelData
