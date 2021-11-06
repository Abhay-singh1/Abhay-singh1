import Abt from './Components/Abt';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {

  return (
    
      <Router>
          <Switch>
            <Route exact path ='/'>
              <Landing />
            </Route>
            <Route exact path ='/aboutme'>
              <Abt />
            </Route>
          </Switch>
      </Router>
     
    
  );
}

export default App;
