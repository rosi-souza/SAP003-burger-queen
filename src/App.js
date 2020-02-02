import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Kitchen from './pages/Kitchen';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/salao">
          <Menu />
        </Route>
        <Route path="/cozinha">
          <Kitchen />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
