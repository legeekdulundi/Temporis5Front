import HomePage from "./Pages/HomePage"
import DBPage from "./Pages/DBPage"
import {  BrowserRouter as Router, Switch, Route,} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch> 
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route exact path="/BDP">
            <DBPage />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
