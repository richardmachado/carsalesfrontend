

import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { NavLink } from 'reactstrap';

import { Switch, Route, Link } from "react-router-dom";
    
import Home from '../components/Home/Home';
import Maintenance from '../components/maintenance/maintenance'
import Login from "../Login/Login";

import About from "../components/About/About"

 import Products from "../components/Inventory/Inventory";
//  import VinSearch from "../components/VinSearch/VinSearch";
 import AddVehicle from '../components/AddVehicle/AddVehicle';
 import Financing from "../components/Financing/Financing"
 import Vehicles from "../components/Inventory/Vehicle"
import EditVehicle from "../components/EditVehicle/EditVehicle"
import PortableSupplies from "../components/Inventory/Portable";
import Accessories from "../components/Inventory/Accessories";
import Treats from '../components/Inventory/Treats'
import Logo from "./Logo.jpg";


function Navi () {
    return (
      <div>
<Navbar bg="light" expand="lg" sticky="top">
                {/* <Navbar.Brand href="/">Logo</Navbar.Brand> */}
                <img src={Logo} href="/" alt="logo"/>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink tag={Link}  to="/">Home</NavLink>
      <NavLink tag={Link}  to="/about">About Us</NavLink>
      <NavDropdown href="/products" title="Products"  id="basic-nav-dropdown">
        <NavLink tag={Link}  to="/portable-supplies">Portable Supplies</NavLink>
        <NavLink tag={Link}  to="/portable-accessories">Portable Accessories</NavLink>
        <NavLink tag={Link}  to="/treats">Treats</NavLink>
    
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


  <Switch>
          <Route exact path="/" component={Home} />
         {/* <Route path="/vinsearch" component={VinSearch} /> */}
         <Route path="/login" component={Login} />
         <Route path="/products" component={Products} />
         <Route exact path="/maintenance" component={Maintenance} />
         <Route path="/addvehicle" component={AddVehicle} />
         <Route path="/financing" component={Financing} />
         <Route path="/vehicles/:id" component={Vehicles} />
                <Route path="/edit/:id" component={EditVehicle} />
                <Route path="/about" component={About} />
                <Route path="/portable-supplies" component={PortableSupplies} />
          <Route path="/portable-accessories" component={Accessories} />
          <Route path="/treats" component={Treats} />


 </Switch>
 </div>




    );
  }

  export default Navi;