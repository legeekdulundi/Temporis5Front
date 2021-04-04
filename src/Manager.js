import HomePage from "./Pages/HomePage"
import DBPage from "./Pages/DBPage"
import {  BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function Manager() {

  // body: JSON.stringify({ title: 'React POST Request Example' })

  function NewCraft(Craft)
  {
    fetch('http://localhost:8888/AddCraft/', {
        method: 'post',
        headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'},
        body: Craft
      }).then(res=>res.json())
      .then(function(res) 
      {
        console.log(res);   
      });
  }
  

// async function fetchMovies() {
//   const response = await fetch('http://localhost:8888/GetCraft/');
//   console.log(response);
// }

  return (
    <Router>
      <Switch> 
        <Route exact path="/">
            <HomePage NewCraft={NewCraft}/>
        </Route>
        <Route exact path="/BDP">
            <DBPage />
        </Route>
      </Switch>

    </Router>
  );
}

export default Manager;
