
import './App.css';
import Navigation from './Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';

import Login from "./Login/Login"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path ="/" component={Home} />

        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
