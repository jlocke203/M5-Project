import React, { useState, useEffect } from "react"
import Jewelry from "./Jewelry";
import JewelryContainer from "./JewelryContainer"
import ShoppingCart from './ShoppingCart';




const MainContainer = (props) => {
   

    

    
    return(
        <div>
            {props.page === 'cart' ? <ShoppingCart cart ={props.cart} page={props.page} removeItem={props.removeItem}/> : <JewelryContainer addToCart={props.addToCart}/>}
            
        </div>
    )
}

export default MainContainer