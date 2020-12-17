import React from "react";
import { CardDeck, Card, Button, CardGroup } from "react-bootstrap";
import Jewelry from "./Jewelry.js"
import ShoppingCart from "./ShoppingCart.js";




class JewelryList extends React.Component {


    render() {



        return (
            <CardGroup>

                {this.props.jewelries.map(jewelry => {

                    return (
                        <Jewelry
                            key={jewelry.id}
                            jewelry={jewelry}
                            addToCart={this.props.addToCart}

                        />
                    );
                    
                })}

            </CardGroup>
        )
    }
}
export default JewelryList;
