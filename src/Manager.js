import HomePage from "./Pages/HomePage"
import { useState,useEffect,useRef} from 'react';
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

  const [LienBack] = useState('http://localhost:8888');

  const mediaMatch = window.matchMedia('(min-width: 600px)');
  const [matches] = useState(mediaMatch.matches);


  useEffect(() => {
    GetListItem()
    GetListCarte()
    GetListeRecette("/GetNewCraft/");
  }, [])
  async function GetListItem()
  {
    fetch(LienBack + '/GetItemDTO/', {
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
    fetch(LienBack + '/GetCarte/', {
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
    fetch(LienBack + '/AddCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Craft)
      }).then(res=>res.json())
      .then(function(res) 
      {
          setRequestStatusFrom(res.Api);
          setRequestStatus(res.statut);
          setNbrRequest(NbrRequest+1);
      });
  }
  function GetListeRecette(Url)
  {
    fetch(LienBack + Url, {
      method: 'get',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
    }).then(res=>res.json())
    .then(function(res){
      // res.items.
      setListeRecette(res.listeCraft)
    });
  }
  function GetRecetteWithCarte(Param)
  {
    fetch(LienBack + '/GetCraftCarte/', {
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
    fetch(LienBack + '/GetCraft/', {
      method: 'post',
      headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
      body: JSON.stringify(Param)
    }).then(res=>res.json())
    .then(function(res) 
    {
      if(res.statut===200)
        setListeRecette(res.listeCraft)
      else
      {
        
        setListeRecette([])
      }
        
    });
  }
  function ResetStatus(){setRequestStatus(0);}
  function Rechercherecette(Item)
  {
    fetch( LienBack + '/GetCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
          if(res.statut!==400)
          {
            setRecetteRecherche(res.listeCraft[0]);
          }
            
          setRequestStatusFrom(res.Api);
          setRequestStatus(res.statut);
          setNbrRequest(NbrRequest+1);
      });
  }
  function DeleteItem(Item)
  {
    fetch(LienBack + '/DeleteCraft/', {
        method: 'delete',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
        if(RequestStatus===0)
        {
          if(res.statut!==400)
            GetListeRecette("/GetNewCraft/");
        }
      });
  }
  
  function ModifItem(Item)
  {
    fetch(LienBack + '/ChangeCtaft/', {
        method: 'put',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: JSON.stringify(Item)
      }).then(res=>res.json())
      .then(function(res) 
      {
          // if(res.statut!==400)
          GetListeRecette("/GetNewCraft/");
      });
  }
  
  const [son, setson] = useState(LienBack + "/GetSong/1")
  const [count, setCount] = useState(0);
  useInterval(() => {
    const audioEl = document.getElementById("Audio")
    if(audioEl.paused)
    {
      setson(LienBack + "/GetSong/"+ count)
      document.getElementById("Audio").load()
      setCount(count+1)
      if (audioEl)
        audioEl.play()
    }
  }, Math.floor(Math.random() * 2400000) +1200000); 
  

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  
  // RefreshPage={GetListeRecette("GetNewCraft/")}
  return (
    <Router>
      <Switch> 
        <Route exact path="/">
            <HomePage NewCraft={NewCraft} NbrRequest={NbrRequest} ResetStatus={ResetStatus} Rechercherecette={Rechercherecette} 
            Recette={RecetteRecherche} ListItem={ListItem} ListeCarte={ListeCarte} RefreshPage={GetListeRecette}  Status={RequestStatus} matches={matches}
            RequestStatusFrom={RequestStatusFrom} lienBack={LienBack}/>
        </Route>
        <Route exact path="/BDP">
            <DBPage ListItem={ListItem} ListeCarte={ListeCarte} ListeRecette={ListeRecette} GetRecetteWithItem={GetRecetteWithItem}
            GetRecetteWithCarte={GetRecetteWithCarte} DeleteItem={DeleteItem} ModifItem={ModifItem} matches={matches}/>
        </Route>
      </Switch>
      <audio id="Audio" className="audio-element">
          <source  src={son}></source>
      </audio>
      {/* <audio id="AudioDiv2" className="audio-element">
          <source  id="SourceAudio2"  src={son}></source>
      </audio> */}
    </Router>
  );
}

export default Manager;
