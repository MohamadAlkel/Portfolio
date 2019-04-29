import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody } from 'reactstrap';
import '../styles/profile.css';
import '../styles/Portfolio.css';
import wedo from '../styles/img/wedo.png'






class Profile extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
            test:"black",
            hi:"black"
        }
        this.openCard = this.openCard.bind(this);

    }

    openCard=(e)=> {
        debugger
        e.preventDefault();
        console.log(e.target.className) // id = 3 => state = 3

        // this.setState({
        //     [e.target.id]: "white",
        //   })

        this.setState({
            isOpen:!this.state.isOpen            
        })
        // if(this.state.isOpen ){e.target.className += "white"} 
        if(this.state.isOpen===false){this.setState({[e.target.id]: "black"})}else{this.setState({[e.target.id]: "white"})}
        // console.log([e.target.className])

        }

    

  render() {
    // let hi = "black "
    // if(this.state.isOpen ){e.target.className += "white"} 

    console.log(this.state.test)

    return (
    <div>
      
      <CardColumns  className="topSpace ml-4 mr-4">

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      <Card className=" color ">
      <div className="row">
        <div className="col-xl-8 pr-0">
            <div className="imgCard ">
                <CardImg className="border" top  src={wedo} alt="Card image cap" />
            </div>
        </div>
        <div className="col-xl-4 pl-0 pr-1">
            <CardBody>
            <CardTitle className="top"> | Wedo </CardTitle>
            <CardSubtitle className="textCard pl-3 mt-2"> UI UX Design</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Front-end dev</CardSubtitle>
            <CardSubtitle className="textCard pl-3 mt-2"> Back-end dev</CardSubtitle>
            </CardBody>
        </div>
      </div>
      <div className="row">
         <Button className="btns m-3">See all Project</Button>
      </div>
      </Card>

      
      
    </CardColumns>
      

      </div>
    )
  }
}


export default Profile;
