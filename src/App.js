
import { BrowserRouter as Router, Route,  Switch,Redirect} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import {useAuthcontext} from './hooks/useAuthcontext'






function App() {
  const { authisready ,user}= useAuthcontext()
  return (

    <div>
{ authisready && (    <Router>

    <Navbar/>
    
      <Switch>
        <Route exact path='/'>
        {!user && <Redirect to='sign-in' />}
        {user && <Home/>}
          
        </Route>
        <Route exact path='/sign-up'>
        {!user && <Signup/>}
        {user && <Redirect to='/' />}
        </Route>
        <Route exact path='/sign-in'>
        {!user && <Signin/>}
        {user && <Redirect to='/' />}
        </Route>
        <Route exact path='*'>
          <Error/>
        </Route>
      </Switch>

    </Router>)}
    </div>

  
  );
}

export default App
