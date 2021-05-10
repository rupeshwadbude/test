import React, { Component } from 'react'
import Menu from './icon/bars-solid.svg';
import Close from './icon/times-solid.svg';
import Cart from './icon/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import './css/Header.css';
import { DataContext } from "./Context";

export default class Header extends Component {
    static contextType = DataContext;

state = {
    toggle:false
}

menuToggle = () =>{
    this.setState({toggle:!this.state.toggle})
}

    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        console.log(cart)
        return (
            <header >

           
            <div className="menu" onClick={this.menuToggle}>
                <img src={Menu} alt="" width="20px"></img>
            </div>
            <div className= "logo">
                <h1>Food's Restaurant</h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle": ""} >
                   
                    <li><Link to="/product">Product</Link></li>                             
                    <li><Link to="/">Login / Register</Link></li>
                    <li className="close" onClick={this.menuToggle}>
                        <img src={Close} alt="" width="20"></img>
                    </li>
                </ul>
            
            <div className="nav-cart">
            
                <span>{cart.length}
                </span>
                <Link to="/cart">
                <img className="cartimg" src={Cart} alt="" width="35px"></img>
                </Link>
                
                </div>
         </nav>
            
            </header>
        )
    }
}
