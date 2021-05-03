import React, { useState, useEffect } from "react";
import Home from './components/Home';
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import * as sessionActions from "./store/session";
import { useDispatch } from "react-redux";
import SignupFormPage from "./components/SignUpFormPage"
import SpotPage from './components/SpotPage'
import SearchPage from './components/SearchPage';
import './App.css'
function App() {


  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
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
        <Route path="/signup">
          <NavBar />
          <SignupFormPage />
        </Route>

        <Route path="/search">
          <NavBar />
          <SearchPage />
        </Route>
        <Route path='/spots/:id'>     
            <NavBar />
            <SpotPage /> 
        </Route>

    </Switch>
  </div>
  );
}

export default App;
