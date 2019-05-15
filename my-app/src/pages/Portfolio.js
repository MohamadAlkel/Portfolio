import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import '../styles/profile.css';
import '../styles/Portfolio.css';
import wedo from '../styles/img/wedo.png'
import wush from '../styles/img/wush.jpg'
import Jubba from '../styles/img/Jubba.jpg'
import IPLACE from '../styles/img/IPLACE.jpg'
import laz from '../styles/img/laz.jpg'
import GLLERY from '../styles/img/GLLERY.jpg'
import YUMMY from '../styles/img/YUMMY.jpg'
import pro from '../styles/img/pro.jpg'
import foody from '../styles/img/foody.jpg'




class Profile extends Component {    

  render() {
    return (
    <div>
      
      <CardColumns  className="topSpaceFlip ml-4 mr-4">    
      


      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={foody} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | Foody </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
              <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
              <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
           
              <Button href="https://foody-recipe.herokuapp.com" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>
  



      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={pro} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | My Profile </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
              <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
              <Button href="/" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={YUMMY} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | YUMMY </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
           
              <Button href="https://www.behance.net/gallery/69392387/YUMMY" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>


      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={laz} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | LAZADA </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            
              <Button href="https://www.behance.net/gallery/71899325/Redesign-LAZADA" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={IPLACE} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | IPLACE </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            
              <Button href="https://www.behance.net/gallery/71292473/IPLACE" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={GLLERY} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | MUEBLE GLLERY </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
             
              <Button href="https://www.behance.net/gallery/70379393/MUEBLE-GLLERY" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={wedo} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | Wedo </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
             
              <Button href="https://www.behance.net/gallery/72999029/Daily-Tasks" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={Jubba} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> |  Jubba airways </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
 
              <Button href="https://www.behance.net/gallery/72807405/Redesign-Jubba-airways" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className=" flip ">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={wush} className="imgFlip"  alt="Avatar" />
            </div>
            <div class="flip-card-back">
            <CardTitle className="top"> | Wushoo  </CardTitle>
              <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>

              <Button href="https://www.behance.net/gallery/72798271/Wushoo" target="_blank" className="btnFlip m-3">
                See Project
              </Button>
            </div>
          </div>
        </div>
      </Card>




    </CardColumns>
      
      </div>
    )
  }
}


export default Profile;
