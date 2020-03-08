import React from 'react';
import { Route, Switch } from "react-router-dom";
import Nav from './Components/Nav.js';
import Default from './Components/Default.js';
import Index from './Components/Index.js';
import Report from './Components/Report.js';
import Details from './Components/Details.js';
import Modal from './Components/Modal.js';


function App() {
  return (
    <React.Fragment>

      <Nav />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/details" component={Details}/>
        <Route path="/report" component={Report}/>
        <Route  component={Default}/>
    
      </Switch>
        <Modal />
    </React.Fragment>
    
  );
}

export default App;
