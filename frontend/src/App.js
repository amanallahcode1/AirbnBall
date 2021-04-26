import Home from './components/Home';
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import './App.css'
function App() {

  return (
  <div className='app'>
    
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
        </Route>
        <Route exact path="/login">
          <NavBar />
          <LoginFormPage />
        </Route>
    </Switch>
  </div>
  );
}

export default App;
