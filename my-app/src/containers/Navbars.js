import '../styles/navbar.css';
import Logo from '../styles/img/logos.png'
import Profile from '../styles/img/profile.png'
import work from '../styles/img/work.png'
import portfolio from '../styles/img/portfolio.png'
import contact from '../styles/img/contact.png'
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  } from 'reactstrap';
import {styles} from '../styles/navbar.js';


  
  const navstyles ={
    backgroundColor : "#252526",
    height : 70,
    width: "100%",
    
  }

  
  let origin ={
    color: "#9a9a9b",
    fontSize :28,
    transition: " 1000ms",
    fontFamily: "arial",
    marginRight: 30,
    borderBottom: "4px solid #007bff00"
    
    
  }
  const hover ={
     fontSize : 30,
     color: "#d67332",
     fontWeight: "400",
     borderBottom: "4px solid #d67332",
     paddingTop:14,
     paddingBottom:14

    }

    const img ={
      height : 33,
      paddingRight: 7,
      paddingBottom: 5
 
     }

     const div ={
      width: 233,
     }


  

  
  
  export default class Navbars extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        value1:{...origin, ...hover},
        value2:{...origin },
        value3:{...origin },
        value4:{...origin },
        click: "pro" 
   
      };

      this.toggle = this.toggle.bind(this);
      this.hover1 = this.hover1.bind(this);
      this.nothover1 = this.nothover1.bind(this);
      this.hover2 = this.hover2.bind(this);
      this.nothover2 = this.nothover2.bind(this);
      this.hover3 = this.hover3.bind(this);
      this.nothover3 = this.nothover3.bind(this);
      this.hover4 = this.hover4.bind(this);
      this.nothover4 = this.nothover4.bind(this);
 
    }


    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    
    
    hover1(){
      
        this.setState({value1:{...origin, ...hover }})

      
    }
    
    nothover1(){
      if (this.state.click !== "pro"){
        this.setState({value1:{...origin}})
      }  
    }

    hover2(){
      this.setState({value2:{...origin, ...hover, color: "#519aba", borderBottom: "4px solid #519aba" }})
    }
    
    nothover2(){
      this.setState({value2:{...origin}})
    }

    hover3(){
      this.setState({value3:{...origin, ...hover, color: "#fc69c1", borderBottom: "4px solid #fc69c1" }})
    }
    
    nothover3(){
      this.setState({value3:{...origin}})
    }

    hover4(){
      this.setState({value4:{...origin, ...hover, color: "#c1c13f", borderBottom: "4px solid #c1c13f" }})
    }
    
    nothover4(){
      this.setState({value4:{...origin}})
    }
     
    

    render() {
       
      return (
        <div>
          <Navbar style={navstyles} light expand="xl">
            <NavbarBrand href="/">  <img src={Logo} height="40px"/> </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              
               <div style={div}>
                <NavItem>
                  <NavLink 
                    href="/"
                    style={this.state.value1}
                    onMouseEnter ={this.hover1}
                    onMouseLeave ={this.nothover1} 
                    onClick={this.click} 
                  > <img style={img} src={Profile} />Profile
                  </NavLink>
                </NavItem>  
                </div>

                <div style={div}>
                <NavItem>
                  <NavLink 
                    href="/Ex"
                    style={this.state.value2}
                    onMouseEnter ={this.hover2}
                    onMouseLeave ={this.nothover2}
                  > <img style={img} src={work} />Experience
                  </NavLink>
                </NavItem>
                </div>
                <div style={div}>
                <NavItem>
                  <NavLink 
                    href="#Portfolio"
                    style={this.state.value3}
                    onMouseEnter ={this.hover3}
                    onMouseLeave ={this.nothover3}
                  > <img style={img} src={portfolio} />Portfolio
                  </NavLink>
                </NavItem>
                </div>
                <div style={div}>
                <NavItem>
                  <NavLink 
                    href="#Contact"
                    style={this.state.value4}
                    onMouseEnter ={this.hover4}
                    onMouseLeave ={this.nothover4}
                  > <img style={img} src={contact} />Contact
                  </NavLink>
                </NavItem>
                </div>
                
              </Nav>

         
            </Collapse>
          </Navbar>

             

   
      
          </div>
      );
    }
  }