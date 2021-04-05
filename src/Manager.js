import HomePage from "./Pages/HomePage"
import { useState,useEffect} from 'react';
import DBPage from "./Pages/DBPage"
import {  BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function Manager() {
  const [RecetteRecherche, setRecetteRecherche] = useState([]);
  const [ListItem, setListItem] = useState([]);
  const [ListeCarte, setListeCarte] = useState([]);
  
  const [RequestStatus, setRequestStatus] = useState(0);
  const [RequestStatusFrom, setRequestStatusFrom] = useState('');
  const [ListeRecette, setListeRecette] = useState([]);
  const [NbrRequest, setNbrRequest] = useState(0);
  
  // body: JSON.stringify({ title: 'React POST Request Example' })

  useEffect(() => {
    GetListItem()
    GetListCarte()
    GetListeRecette("GetNewCraft/");
  }, [])
  async function GetListItem()
  {
    fetch('http://localhost:8888/GetItemDTO/', {
      method: 'get',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
    }).then(res=>res.json())
    .then(function(res){
      // res.items.
      res.items.forEach(element => {
        element.name=element.name.replaceAll('_',' ')
        // element.name.
      });
      setListItem(res.items)
    });
  }
  async function GetListCarte()
  {
    fetch('http://localhost:8888/GetCarte/', {
      method: 'post',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
    }).then(res=>res.json())
    .then(function(res){
      // res.items.
      setListeCarte(res.Carte)
    });
  }

  function NewCraft(Craft)
  {
    fetch('http://localhost:8888/AddCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Craft)
      }).then(res=>res.json())
      .then(function(res) 
      {
        
          console.log(res);  
          setRequestStatusFrom(res.Api);
          setRequestStatus(res.statut);
          setNbrRequest(NbrRequest+1);
      });
  }
  function GetListeRecette(Url)
  {
    fetch('http://localhost:8888/'+Url, {
      method: 'get',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
    }).then(res=>res.json())
    .then(function(res){
      // res.items.
      setListeRecette(res.listeCraft)
    });
  }
  function AddCarte(Param)
  {
    fetch('http://localhost:8888/AddCarte/', {
      method: 'post',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
      body: JSON.stringify(Param)
    }).then(res=>res.json())
    .then(function(res) 
    {
      if(res.statut===200)
      {
        GetListCarte()
      }
    });
  }
  function GetRecetteWithCarte(Param)
  {
    fetch('http://localhost:8888/GetCraftCarte/', {
      method: 'post',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
      body: JSON.stringify(Param)
    }).then(res=>res.json())
    .then(function(res) 
    {
      if(res.statut===200)
      {
         setListeRecette(res.listeCraft)
      }
      else
        setListeRecette([])
        
    });
  }
  function GetRecetteWithItem(Param)
  {
    fetch('http://localhost:8888/GetCraft/', {
      method: 'post',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
      body: JSON.stringify(Param)
    }).then(res=>res.json())
    .then(function(res) 
    {
      if(res.statut===200)
        setListeRecette(res.listeCraft)
      else
        setListeRecette([])
    });
  }
  function ResetStatus(){setRequestStatus(0);}
  function Rechercherecette(Item)
  {
    fetch('http://localhost:8888/GetCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
        // if(RequestStatus===0)
          console.log(res);  
          if(res.statut!==400)
          {
            setRecetteRecherche(res.listeCraft[0])
            console.log(res.listeCraft[0])
          }
            
          setRequestStatusFrom(res.Api);
          setRequestStatus(res.statut);
          setNbrRequest(NbrRequest+1);
      });
  }
  function DeleteItem(Item)
  {
    console.log("mqslkdfmqslkd")
    fetch('http://localhost:8888/DeleteCraft/', {
        method: 'delete',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
        if(RequestStatus===0)
        {
          if(res.statut!==400)
            GetListeRecette("GetNewCraft/");
        }
      });
  }
  
  function ModifItem(Item)
  {
    console.log("Modif item")
    fetch('http://localhost:8888/ChangeCtaft/', {
        method: 'put',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
          // if(res.statut!==400)
          GetListeRecette("GetNewCraft/");
      });
  }
  // RefreshPage={GetListeRecette("GetNewCraft/")}
  return (
    <Router>
      <Switch> 
        <Route exact path="/">
            <HomePage NewCraft={NewCraft} NbrRequest={NbrRequest} ResetStatus={ResetStatus} Rechercherecette={Rechercherecette} 
            Recette={RecetteRecherche} ListItem={ListItem} ListeCarte={ListeCarte} RefreshPage={GetListeRecette}  Status={RequestStatus} RequestStatusFrom={RequestStatusFrom}/>
        </Route>
        <Route exact path="/BDP">
            <DBPage ListItem={ListItem} ListeCarte={ListeCarte} ListeRecette={ListeRecette} GetRecetteWithItem={GetRecetteWithItem}
            AddCarte={AddCarte} GetRecetteWithCarte={GetRecetteWithCarte} DeleteItem={DeleteItem} ModifItem={ModifItem}/>
        </Route>
      </Switch>

    </Router>
  );
}

export default Manager;
