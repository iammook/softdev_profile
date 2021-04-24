import logo from './logo.svg';
import './App.css';
import Home from "./homeLayout";
import React from 'react';
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
  </div>
  );
}

export default App;
