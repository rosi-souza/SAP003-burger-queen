import React from 'react';
import Menu from './components/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Kitchen from './components/Kitchen';
import Home from './pages/Home';

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
