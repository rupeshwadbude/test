import React, { Component } from 'react';
import {Form,Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardimg from './Pics/cardimg.jpg'


import './css/firstpage.css'


export default class Firstpage extends Component {

    constructor(props) {
      
        super();
        this.state = {
            Mobile_no: '',
            error: '',
            show: false

        }
    }
  

    
    render() {

        return (
           
            <div className="main-div">
                
                    <Card className="Card" style={{backgroundColor:'white',width: '21rem',paddingBottom:'1%' }}>
                        <Card.Img variant="top" src={cardimg}   className="p-2" style={{borderRadius:'10px',marginLeft:'3%',height:'200px',}} /><br></br>
                        <Card.Body>
                            <Card.Title style={{marginLeft:'-45%'}}>Enter Mobile No</Card.Title>
                            <Card.Text>
                                <input style={{width:'80%',height:'25px'}} type="text"  maxLength="10" placeholder="+91" onChange={(e) => { this.setState({ Mobile_no: e.target.value }) }} ></input>
                                <p>{this.state.error}</p>
                            </Card.Text>
                            <button  type="submit" onClick={() => this.setState({ show: !this.state.show })} style={{width:'40%',height:'40px', borderRadius:'5%',marginLeft:'10%'}} >Get OTP</button>
                            {
                            this.state.show ?
                                <Card.Body>
                                    
                                    <Card.Title style={{marginLeft:'-45%'}}>Enter OTP</Card.Title>
                                    <Card.Text>
                                        <input type="text" style={{width:'80%',height:'25px'}} placeholder="Enter OTP"></input>
                                    </Card.Text>
                                   <Link to= "/product"> <button  type="submit"  style={{width:'40%',height:'40px', borderRadius:'5%',marginLeft:'10%'}}>Submit</button></Link>
                                </Card.Body>
                                : null

                        }
                            
                            
                        </Card.Body>

                     

                    </Card>
                
                  
 
                </div>

           


        )
    }
}