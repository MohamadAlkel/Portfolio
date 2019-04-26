import '../styles/navbar.css';
import '../styles/ex.css';


import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Progress
  } from 'reactstrap';
  
  
  export default class Navbars extends React.Component {


    render() {
      
      return (
        <>
          <div className=" row topSpaceEx">
            <div className="col-xl-8 ">

              <div className="ex">
                <p className="exText">
                  Full-Stack developer at NEXT Academy | Mar 2019 – May 2019 |
                  <p className="exTextOne">Kuala Lumpur, Malaysia</p>
                  <p className="exTextTwo">Experience building JS, React.js, Python and Flask applications. And Strong knowledge responsive web design, with Good understanding of OOPs concepts. Experience with data exchanges (JSON), MySQL, SQLite, PostgreSQL.</p>
                </p>
              </div>
              <div className="ex">
                <p className="exText">
                  Full-Stack developer at NEXT Academy | Mar 2019 – May 2019 |
                  <p className="exTextOne">Kuala Lumpur, Malaysia</p>
                  <p className="exTextTwo">  Experience with data exchanges (JSON), MySQL, SQLite, PostgreSQL.</p>
                </p>
              </div>
              <div className="ex">
                <p className="exText">
                  Full-Stack developer at NEXT Academy | Mar 2019 – May 2019 |
                  <p className="exTextOne">Kuala Lumpur, Malaysia</p>
                  <p className="exTextTwo"> applications. And Strong knowledge responsive web design, with Good understanding of OOPs concepts. Experience with data exchanges (JSON), MySQL, SQLite, PostgreSQL.</p>
                </p>
              </div>
              <div className="ex">
                <p className="exText">
                  Full-Stack developer at NEXT Academy | Mar 2019 – May 2019 |
                  <p className="exTextOne">Kuala Lumpur, Malaysia</p>
                </p>
              </div>
              

            </div>

            <div className="col-xl-2 ">

              <div className="skills">
                <h1 className="skillsText">HTML</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">CSS</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">JS/ES6</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">ReactJS</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Python</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>

            </div>

            <div className="col-xl-2 ">

              <div className="skills">
                <h1 className="skillsText">HTML</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">CSS</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">JS/ES6</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">ReactJS</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Python</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>
              <div className="skills">
                <h1 className="skillsText">Flask</h1><br/>
                <Progress className="skillsValue" value="75"></Progress>
              </div>

            </div>
            
          

          </div>
        </>
      );
    }
  }