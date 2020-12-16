import './App.css';
import Navigation from './Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';

import Login from "./Login/Login";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Maintenance from "./components/maintenance/Maintenance";
import VinSearch from "./components/VinSearch/VinSearch";
import AddVehicle from './components/AddVehicle/AddVehicle';
import Financing from "./components/Financing/Financing"
import Vehicles from "./components/Inventory/Vehicle"
import Footer from './components/footer/Footer'
// import PrivateRoute from './utils/PrivateRoute';

function App(props) {

  return (

    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/vinsearch" component={VinSearch} />
        <Route path="/login" component={Login} />
        <Route path="/inventory" component={Inventory} />
        <Route exact path="/maintenance" component={Maintenance} />
        <Route path="/addvehicle" component={AddVehicle} />
        <Route path="/financing" component={Financing} />
        <Route path="/vehicles/:id" component={Vehicles} />
   
        </Switch>
        <Footer />

    </div>
  );
}

export default App;
