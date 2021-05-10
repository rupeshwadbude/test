import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../Context';
import '../css/Product.css'
import Header from '../Header';

 class Products extends Component {

    static contextType =DataContext;

    render() {

        const{product} = this.context;
        return (
            <div>
                <Header />
                <div id="product">
                
                {
                product.map(product =>(
                    <div className= "card" key={product._id}>
                    
                        <img src={product.Image}alt="" ></img>
                
                    <div className="content"> 
                    <h3>
                        {product.Name}
                    </h3>
                    <span>Price : {product.Price}Rs</span><br></br>
                    <button onClick={()=>this.context.addtocart(product._id)}>Add to cart</button>
                    </div>
                    </div>
                ))
                }
            </div>
            </div>
            
        )
    }
}
export default Products;