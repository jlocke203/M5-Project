
import EditForm from './EditForm';
import React, { useState, useEffect } from "react"
import Jewelry from "./Jewelry"
import Item from "./Item"


function ShoppingCart(props) {





    // incrementMe = () => {
    //     let newCount = this.state.count + 1
    // this.setState({
    //   count: newCount
    // })
    // }

    // handleClick = () => {
    //     let newBoolean = !this.state.display;
    //     this.setState({
    //       display: newBoolean,
    //     });
    //   };

    // handledClick = (e) => {
    //     this.setState({

    //         isClicked: !this.state.isClicked

    //     })


    // }




    // const [cart, setCart] = useState([])
    return (
        <div className="cart">
            <h1>Cart</h1>
            {/* //            <header>
    //     <button>Go to Cart ({cart.length})</button>
    //   </header> */}
            {props.cart.map(jewelry => {
                <button disabled={props.cart.includes(jewelry.id)}>...</button>
                console.log(jewelry)
                return (
                    <Item
                    key={jewelry.id}
                    jewelry={jewelry}
                    
                    
                    />
                    );
                })}
            {/* {props.cart.map((jewelry, idx) => {
                        return (
                            // console.log(jewelry)
                            <Jewelry
                                key={idx}
                                jewelry={jewelry}
                                
                                />
                                );
                    })} */}
        </div>
    )
}


export default ShoppingCart;