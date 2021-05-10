import React, { Component } from 'react'
import pepsi from './Pics/pepsi.jpeg';
import fries from './Pics/fries.jpeg';
import coke from './Pics/coke.jpeg';
import burger from './Pics/burger.jpeg';

export const DataContext = React.createContext();



export  class DataProvider extends Component {

    state = {
        product:[
            {count:1,_id:"1", Name: "Pepsi",  Price: 20 , Image:pepsi }, 
            {count:1,_id:"2", Name: "Fries", Price:50 , Image: fries}, 
            {count:1,_id:"3", Name: "coke", Price:40, Image: coke}, 
            {count:1,_id:"4",Name: "Hamburger",Price: "200",  Image: burger},            
                    
          
        ],

        cart:[],
        total:0
    }

    addtocart = (id) =>{
        const{product, cart} = this.state;

        const check = cart.every(item =>{
            return item._id !==id
        })
        if(check){
        const data = product.filter(product=>{
            return product._id === id
        })
        this.setState({cart: [...cart,...data]})
    }else{
        alert("The product  has been added to cart")
    }
    };

    Decrement = id =>{
        const {cart} = this.state;
        cart.forEach(item  =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    Increment = id =>{
        const {cart} = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    }

    removecart = id =>{
        if(window.confirm("Do you want to delete this product")){
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item._id === id){
               cart.splice(index, 1)
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    }
};

getTotal  =  () =>{
    const{cart} = this.state;
    const  res = cart.reduce((prev, item) =>{
        return prev + (item.Price * item.count);
    },0)
    this.setState({total:res})
}

payment = () =>{

        alert("Your Order is Successful")
    
    
   
}

componentDidUpdate(){
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
}


    
    render() {
        const {product, cart, total} = this.state;
        const {addtocart,Increment, Decrement, removecart, getTotal,payment} = this;
        return (
            <div>
                <DataContext.Provider value={{product, addtocart, cart, Increment, Decrement, removecart,total,getTotal,payment}}>
                    {this.props.children}
                </DataContext.Provider>
            </div>
        )
    }
}
