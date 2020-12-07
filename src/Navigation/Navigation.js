import React, { Component} from 'react'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
       
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                        <Nav className="ml-auto" navbar>
                       
                        <NavItem>
                                <NavLink href="/inventory">Inventory</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Dropdown
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    <NavLink href="/vinsearch">VIN Search</NavLink>
                  </DropdownItem>
                                    <DropdownItem>
                                    <NavLink href="/financing">Financing</NavLink>
                  </DropdownItem>
                                  
                                </DropdownMenu>
                            </UncontrolledDropdown>

                          
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                           
                        </Nav>
                
                </Navbar>
            </div>
        )
    }
}
export default Header