
import './styles/navbar.css';
import Logo from './styles/img/logos.png'
import Profile_img from './styles/img/profile.png'
import work from './styles/img/work.png'
import portfolio from './styles/img/portfolio.png'
import contact from './styles/img/contact.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
  } from 'reactstrap';


import React, { Component } from 'react';
import './App.css';
import  Profile  from './pages/Profile';
import  Ex  from './pages/Ex';
import Notfound  from "./pages/Notfound"
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'







class App extends Component {

          constructor(props) {
            super(props);
            this.state = {
              isOpen: false,
 
        
            };

            this.toggle = this.toggle.bind(this);
        

          }


          toggle() {
            this.setState({
              isOpen: !this.state.isOpen
            });
          }

    


  render() {
      let navbaritem = "onenav "
      if(this.state.isOpen){navbaritem += "open"} 

    return (
      <Router>
      <div className="App">
      <Navbar className="navstyle" light expand="xl">
            <NavbarBrand href="/">  <img src={Logo} height="40px"/> </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="" isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto smallnavbar" navbar>
              
                <div className={navbaritem}>
                <NavItem>
                  <NavLink 
                    exact  to="/"
                    activeClassName="active"
                    className="navitem"
                    // style={this.state.value1}
                    // onMouseEnter ={this.hover1}
                    // onMouseLeave ={this.nothover1} 
                  > <img className="imges" src={Profile_img} />Profile
                  </NavLink>
                </NavItem>  
                </div>

                <div className={navbaritem}>
                <NavItem>
                  <NavLink 
                    to="/Experience"
                    activeClassName="active"
                    className="navitem blue"
                    // style={this.state.value2}
                    // onMouseEnter ={this.hover2}
                    // onMouseLeave ={this.nothover2}
                  > <img className="imges" src={work} />Experience
                  </NavLink>
                </NavItem>
                </div>
                <div className={navbaritem}>
                <NavItem>
                  <NavLink 
                    to="/Portfolio"
                    activeClassName="active"
                    className="navitem green"
                    // style={this.state.value3}
                    // onMouseEnter ={this.hover3}
                    // onMouseLeave ={this.nothover3}
                  > <img className="imges" src={portfolio} />Portfolio
                  </NavLink>
                </NavItem>
                </div>
                <div className={navbaritem}>
                <NavItem>
                  <NavLink 
                    to="/Contact"
                    activeClassName="active"
                    className="navitem pink"
                    // style={this.state.value4}
                    // onMouseEnter ={this.hover4}
                    // onMouseLeave ={this.nothover4}
                  > <img className="imges" src={contact} />Contact
                  </NavLink>
                </NavItem>
                </div>
                
              </Nav>

         
            </Collapse>
          </Navbar>

      
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/Experience" component={Ex} />
          <Route  component={Notfound} />
        </Switch>

      </div>
      </Router>
    );
  }
}

export default App;












  
  

