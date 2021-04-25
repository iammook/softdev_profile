import logo from './logo.svg';
import './App.css';
import Home from "./homeLayout";
import React from 'react';
import Profile from './profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    // <>
    //   <Router>
    //     <Switch>
    //       <div className="App">
    //         <Home/>
    //       </div>
    //       <Route path='/' exact />
    //     </Switch>
    //   </Router>
    // </>
  <div className="App">
    <Home/>
    <Router>
        <Switch>
          <Route path='/' exact ></Route>
          <Route path='/profile' exact ><Profile/></Route>
          {/* <Route path='/profile_like' exact ><Profile/></Route> */}
        </Switch>
    </Router>
  </div>
  );
}

export default App;
