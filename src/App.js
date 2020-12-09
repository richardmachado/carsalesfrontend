import './App.css';
import Navigation from './Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';

import Login from "./Login/Login";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Maintenance from "./components/maintenance/maintenance";
import VinSearch from "./components/VinSearch/VinSearch";
import AddVehicle from './components/AddVehicle/AddVehicle';


function App(props) {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vinsearch" component={VinSearch} />
        <Route path="/login" component={Login} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/maintenance" component={Maintenance} />
        <Route path="/addvehicle" component={AddVehicle} />
   
      </Switch>
    </div>
  );
}

export default App;
