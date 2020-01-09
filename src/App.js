import React from 'react';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Kitchen from './components/Kitchen';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/salao">
          <Menu />
        </Route>
        <Route path="/">
          <Kitchen />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
