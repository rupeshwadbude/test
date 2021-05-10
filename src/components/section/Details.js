import React, { Component } from 'react'
import {DataContext} from '../Context';
import {Link}  from 'react-router-dom';
import '../css/Details.css';
import Header from '../Header';
 class Details extends Component {
    static  contextType = DataContext;

    state = {
        product:[]
    }

    getproduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.product;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product:data})
        }
    }

    componentDidMount(){
        this.getproduct();
    }
    render() {
        const {product} = this.state;
        const {addtocart} = this.context;
        return (
            <div>
                <Header />
                {
                    product.map(item =>(

                        <div className="details" key={item._id}>
                            <img src={item.Image} alt=""/>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.Name}</h2>
                                    <span>${item.Price}</span>
                                </div>
                                <p>{item.description}</p>
                                <Link to="/cart" className="cart" onClick={()=> addtocart(item._id)}>Add to cart</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
export default Details;