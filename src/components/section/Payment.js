import React, { Component } from 'react'
import Header from '../Header'
import { Card } from 'react-bootstrap';
import cardimg from '../Pics/cardimg.jpg'
import '../css/Payment.css';
import { DataContext } from '../Context';

export default class Payment extends Component {

    static contextType = DataContext;

    render() {
        const {  payment } = this.context;
        return (

            <div>
                <Header />

                <div className="pycard">
                        <Card style={{ backgroundColor: 'white', width: '21rem', paddingBottom: '1%' }}>
                                <Card.Img variant="top" src={cardimg} className="p-2" style={{ borderRadius: '10px', marginLeft: '3%', height: '200px', }} /><br></br>
                                <Card.Body>
                                    <Card.Title class="text">Full Name </Card.Title>
                                    <Card.Text >
                                        <input class="form" type="text" placeholder="Enter Your FullName"  ></input>
                                        <p></p>
                                    </Card.Text>
                                    <Card.Title class="text">Contact </Card.Title>
                                    <Card.Text>
                                        <input type="text" class="form" maxLength="10" placeholder="Enter Mobile No."></input>
                                    </Card.Text>
                                    <Card.Title class="text">Address </Card.Title>
                                    <Card.Text>
                                        <input type="text" class="form" placeholder="Enter Your Address"></input>
                                    </Card.Text>
                                    <Card.Title class="text">LandMark </Card.Title>
                                    <Card.Text>
                                        <input type="text" class="form" placeholder="Enter Your LandMark"></input>
                                    </Card.Text>
                                    <button type="submit" onClick={() => this.context.payment(payment._id)} style={{ width: '50%', borderRadius: '5%', marginLeft: '3%' }}>Submit</button>
                                </Card.Body>

                            </Card>
                </div>


            </div>

        )
    }
}
