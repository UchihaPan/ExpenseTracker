
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (

    <div>
    <Router>
    
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>
        <Route exact path='/signin'>
          <Signin/>
        </Route>
      </Switch>
    </Router>
    </div>

  
  );
}

export default App
