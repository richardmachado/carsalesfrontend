// import React, { Component } from 'react';
// import { Switch, Route,Link } from "react-router-dom";
//     // import {
//     //     Navbar,
//     //     NavbarToggler,
//     //     NavbarBrand,
//     //     Nav,
//     //     NavItem,
//     //     NavLink,
//     //     UncontrolledDropdown,
//     //     DropdownToggle,
//     //     DropdownMenu,
//     //     DropdownItem
//     // } from 'reactstrap';

// import Navbar from 'react-bootstrap/Navbar'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Nav from 'react-bootstrap/Nav'

// import Login from "../Login/Login";
// import Home from "../components/Home/Home";
// import Inventory from "../components/Inventory/Inventory";
// import Maintenance from "../components/maintenance/maintenance";
// import VinSearch from "../components/VinSearch/VinSearch";
// import AddVehicle from '../components/AddVehicle/AddVehicle';
// import Financing from "../components/Financing/Financing"
// import Vehicles from "../components/Inventory/Vehicle"
// import EditVehicle from "../components/EditVehicle/EditVehicle"



// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false,
//             navCollapsed: true,
//             showNavbar: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//     render() {
  
//         return (
//             <div>
//                 <Navbar bg="light" expand="lg">
                
//                         <Navbar.Brand href="/">Home</Navbar.Brand>
                  
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="/inventory">Inventory</Nav.Link>
//                             <Nav.Link href="/maintenance">Maintenance</Nav.Link>
//                             <Nav.Link href="/financing">Financing</Nav.Link>
                            
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>

//   </Navbar.Collapse>
//                 </Navbar>
                
//                 <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/vinsearch" component={VinSearch} />
//         <Route path="/login" component={Login} />
//         <Route path="/inventory" component={Inventory} />
//         <Route exact path="/maintenance" component={Maintenance} />
//         <Route path="/addvehicle" component={AddVehicle} />
//         <Route path="/financing" component={Financing} />
//         <Route path="/vehicles/:id" component={Vehicles} />
//         <Route path="/edit/:id" component={EditVehicle} />

   
//         </Switch>
//             </div>

            
//         )
//     }
// }
// export default Header

import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'reactstrap';

import { Switch, Route,Link } from "react-router-dom";
    
import Home from '../components/Home/Home';
import Maintenance from '../components/maintenance/maintenance'
import Login from "../Login/Login";

 import Inventory from "../components/Inventory/Inventory";
//  import VinSearch from "../components/VinSearch/VinSearch";
 import AddVehicle from '../components/AddVehicle/AddVehicle';
 import Financing from "../components/Financing/Financing"
 import Vehicles from "../components/Inventory/Vehicle"
 import EditVehicle from "../components/EditVehicle/EditVehicle"



function Navi () {
    return (
      <div>
<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
  <NavLink tag={Link} to="/">Home</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavLink tag={Link} to="/maintenance">Maintenance</NavLink>
   
      <NavLink tag={Link} to="/inventory">Inventory</NavLink>
   
      <NavLink tag={Link} to="/financing">Financing</NavLink>
      <NavLink tag={Link} to="/login">Login</NavLink>

      
    </Nav>
    <Nav>
      <Nav.Link href="http://richardmachado.dev">Richard Machado</Nav.Link>
   
    </Nav>
  </Navbar.Collapse>


</Navbar>
  <Switch>
          <Route exact path="/" component={Home} />
         {/* <Route path="/vinsearch" component={VinSearch} /> */}
         <Route path="/login" component={Login} />
         <Route path="/inventory" component={Inventory} />
         <Route exact path="/maintenance" component={Maintenance} />
         <Route path="/addvehicle" component={AddVehicle} />
         <Route path="/financing" component={Financing} />
         <Route path="/vehicles/:id" component={Vehicles} />
         <Route path="/edit/:id" component={EditVehicle} />
   


 </Switch>
 </div>




    );
  }

  export default Navi;