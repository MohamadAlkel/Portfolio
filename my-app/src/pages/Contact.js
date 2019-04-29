import React, { Component } from 'react';
import '../styles/profile.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../styles/contact.css';


class Contact extends Component {

  render() {


    const ttt=[
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#bcbc3a",
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": -31
                },
                {
                    "lightness": -33
                },
                {
                    "weight": 2
                },
                {
                    "gamma": 0.8
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": 30
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        }
    ]

    var bounds = new this.props.google.maps.LatLngBounds();


    return (
    <>
    <div className="row ">
        <div className="col-lg-6 ">

            <div className="row">
              <div className="col-lg-6 topSpaceContact">
                <h1 className="titleInfo ">| Phone </h1>
                <h5 className="info  ">   +60 14 237 3389 </h5>
                <h1 className="titleInfo">| Email </h1>
                <h5 className="info">   arcmohammadalkl@gmail.com </h5>
              </div>

              <div className="col-lg-6 topSpaceContact">
                <h1 className="titleInfo">| Skype </h1>
                <h5 className="info">   live:arcmohammadalkl </h5>
                <h1 className="titleInfo">| Location </h1>
                <h5 className="info">   Kuala Lumpur, Malaysia </h5>          
              </div> 
            </div>

            <a className="attribute " href="https://www.linkedin.com/in/mohamad-alkel/" target="_blank">
                <button  className="btnContact buttonContact attribute">
                  linkedIn
                </button>
            </a>

            <a className="attribute " href="https://www.behance.net/arcmohamma0626" target="_blank">
                <button  className="btnContact buttonContact attribute">
                  Bēhance
                </button>
            </a>

            <a className="attribute " href="https://github.com/MohamadAlkel" target="_blank">
                <button  className="btnContact buttonContact attribute">
                  GitHub 
                </button>
            </a>
        </div>   

        <div className="col-xl-6  mr-0">

            <div className="warpMap">
                <Map google={this.props.google}
                    initialCenter={{
                    lat: 5.158843,
                    lng: 474.343592
                    }}
                    style={{width: '100vw', height: '100vh', position: 'flex'}}
                    styles={ttt}
                    className={'map '}
                    zoom={5}
                >
                    <Marker
                       title={'The marker`s title will appear as a tooltip.'}
                       name={'SOMA'}
                       position={{lat: 3.158843, lng: 101.710917}}
                       bounds={bounds}
                    /> 
                </Map>
            </div>  
                        
        </div>      
    </div>
    </>
    )
  }
}


// export default Contact;

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBrMs9nT6Nsze9D9mEzv_tl57lKzsz46dA")
  })(Contact)
