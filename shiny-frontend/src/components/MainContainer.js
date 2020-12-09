import React, { useState, useEffect } from "react"
import Jewelry from "./Jewelry";
import JewelryContainer from "./JewelryContainer"
import ShoppingCart from './ShoppingCart';
import CustomPieceForm from './CustomPieceForm'




const MainContainer = (props) => {
   
const displayPage = () => {
    if (props.page === 'cart') {
        return <ShoppingCart cart ={props.cart} page={props.page} removeItem={props.removeItem} clearCart={props.clearCart} getTotalSum={props.getTotalSum}/>
    } else if(props.page == 'custom'){
        return <CustomPieceForm/>
    }else{
        return <JewelryContainer addToCart={props.addToCart} navigateTo={props.navigateTo}/>
    }
}
    

    
    return(
        <div>
            {displayPage()}
            
        </div>
    )
}

export default MainContainer