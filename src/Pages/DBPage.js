import VerticalNavBarre from "../component/Vertical_navBar"
import ContainerRecette from "../component/ContainerRecette"

const DBPage = (props) => {
    return (
        <>
            <VerticalNavBarre ListeCarte={props.ListeCarte} AddCarte={props.AddCarte} GetRecetteWithCarte={props.GetRecetteWithCarte}/>
            <ContainerRecette ListeCarte={props.ListeCarte} ListItem={props.ListeItemsKnow} 
            ListeRecette={props.ListeRecette} GetRecetteWithItem={props.GetRecetteWithItem} DeleteItem={props.DeleteItem} ModifItem={props.ModifItem} matches={props.matches}/> 
        </>
    )
}

export default DBPage


