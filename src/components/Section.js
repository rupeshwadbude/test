import React, { Component } from 'react';
import Products from './section/Products';
// import Detail from './section/Details';
import {Route} from 'react-router-dom';
import Cart from './section/Cart';
import Payment from './section/Payment';
import Firstpage from './Firstpage';



class Section extends Component {
    render() {
        return (
           <section>
               
                <Route exact path="/" component={Firstpage} />              
               <Route path="/product" component={Products} exact />
               {/* <Route path="/product/:id" component={Detail} /> */}
               <Route path="/cart" component={Cart}/>
               <Route path="/payment" component={Payment}/>
           </section>
        );
    }
}

export default Section;