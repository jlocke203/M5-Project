
import EditForm from './EditForm';
import React, { useState, useEffect } from "react"
import Jewelry from "./Jewelry"
import Item from "./Item"
import CustomPieceFoem from './CustomPieceForm';
import {Button} from "react-bootstrap"


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
    console.log(props.cart)
    return (
        <div className="cart">
            <h1>Cart</h1>
        {/* <button onClick={props.clearCart}>Clear Cart</button> */}
        <Button onClick={props.clearCart} variant="danger">Clear</Button>{' '}

            {props.cart.map(jewelry => {
                <button disabled={props.cart.includes(jewelry.id)}></button>
                console.log(props.cart)
                return (
                    <Item
                    key={jewelry.id}
                    jewelry={jewelry}
                    cart={props.cart}
                    removeItem={props.removeItem}
                    addTocart={props.addTocart}
                    
                    
                    />
                    );
                   
                })}

<div>Amount: ${props.getTotalSum()}</div>
            
        </div>
        
    )
    
}


export default ShoppingCart;