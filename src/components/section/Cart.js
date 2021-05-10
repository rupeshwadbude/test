import React, { Component } from 'react'
import {DataContext} from '../Context';
import {Link}  from 'react-router-dom';
import '../css/cart.css';
import Header from '../Header';

export default class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    render() {
        const {cart, Increment, Decrement, removecart, total} = this.context;

        if(cart.length === 0 ){
            return<div> <Header /> <h2 style={{textAlign:'center'}}>Nothings Product</h2></div> 
        }else{
            return (
                <div>
                    <Header />
                    {
                        cart.map(item =>(
    
                            <div className="cart" key={item._id}>
                                <img src={item.Image} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.Name}</h2>
                                        <span>Price : {item.Price * item.count} Rs</span>
                                    </div>
                                    <p>{item.description}</p>
                                   <div className="amount"> Quantity : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                       <button className="count" onClick={()=> Decrement(item._id)}> - </button>
                                        <span>{item.count}</span>
                                       <button className="count" onClick={()=> Increment(item._id)}> + </button>
                                   </div>
                                </div>
                                <div className="delete" onClick={() => removecart(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="total">
                    <Link to="/payment">Place order</Link>
                    <h3>Total:$ {total}</h3>
                    </div>
                </div>
            )
        }
        }
        
}
