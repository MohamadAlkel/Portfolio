import React, { Component } from 'react';
import  Navbars  from '../containers/Navbars'
import { Container, Row, Col } from 'reactstrap';
import '../styles/navbar.css';

const greeting ={
  fontSize : 60,
  color: "#fff",
  fontWeight: "bold",
  fontFamily: "arial",
  paddingLeft: "5vw",
  paddingTop:100,
  
  textAlign: "start"
 }

 const type ={
  fontSize : 25,
  color: "#9a9a9b",

  fontFamily: "arial",
  paddingLeft: "5vw",

  paddingBottom:14,
  textAlign: "start"
 }

 const button ={
  padding: "10px 40px",
  fontWeight: "bold",
  marginTop: 40,
  marginLeft: "5vw",
	textAlign: "start",
  border: "4px solid #d67332",

  borderRadius: 10,
  backgroundColor: "transparent",
  fontSize : 25,
  color: "#d67332",
  marginBottom: 50,

  fontFamily: "arial",
  display: "flex",



 }


 const oring ={
  
  color: "#d67332",
 

 }


 const file ={
  
  color: "#d67332",
  fontSize: 50,
  fontWeight: "bold",

 

 }

 const profile ={
   color: "#fff",
   textAlign: "start",
   borderLeft: "4px solid #d67332",
   marginTop: 100,
   fontWeight: "bold",
  fontFamily: "arial",
  paddingLeft: "5vw",
  paddingTop:50,
  fontSize: 100,
 } 


 const text ={
  lineHeight: "1.4",
  color: "#fff",
  letterSpacing: "1px",
  marginTop: 5,
  marginLeft: 40,
  fontWeight: "400",
  marginBottom: 50,

  
}

const any = {
  marginTop: 70
}

class Home extends Component {
  render() {
    return (
    <div>
      
        <div style={any} className="row">

            <div className="col-xl-5 " >
              <h1  style={greeting}><span style={oring}>Ξ </span>Hi<span style={oring}>,</span> <br/>I'm Mohamad<span style={oring}>,</span><br/>Web Developer<span style={oring}>.</span></h1> 
              <h2 style={type}>Front-End Developer / Back-End Developer.</h2>
              <button style={button} className="btn">Download my CV</button>
            </div>








              <div style={profile} className="col-xl-6">
       
    
                  <h1 ><span style={file}><span style={oring}>▣  </span>Profile </span></h1> 
                  <h5 style={text}>I am a hands-on UI/UX Designer and a Web Developer who is passionate about
developing experiences based on insights of real customer needs, has the craft to
turn those insights into intuitive and beautiful products (both as interactions as
well as visuals) and inspire the organisation through creativity and collaboration. I
have the ability to take the ownership of designing and coding rich and extremely
usable user interfaces that fulfil business needs and inspire new way of thinking.</h5>
                </div>
                  
              </div>
      

      </div>
    )
  }
}


export default Home;
