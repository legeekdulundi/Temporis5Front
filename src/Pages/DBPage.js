import VerticalNavBarre from "../component/Vertical_navBar"
import ContainerRecette from "../component/ContainerRecette"

const DBPage = (props) => {
    return (
        <>
            <VerticalNavBarre ListeCarte={props.ListeCarte} AddCarte={props.AddCarte} GetRecetteWithCarte={props.GetRecetteWithCarte}/>
            <ContainerRecette ListeCarte={props.ListeCarte} ListItem={props.ListItem} 
            ListeRecette={props.ListeRecette} GetRecetteWithItem={props.GetRecetteWithItem} DeleteItem={props.DeleteItem} ModifItem={props.ModifItem}/> 
        </>
    )
}

export default DBPage


