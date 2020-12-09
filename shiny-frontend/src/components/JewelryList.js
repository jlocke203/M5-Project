import React from "react";
import { Carousel, Col, Button } from "react-bootstrap";
import Jewelry from "./Jewelry.js"
import ShoppingCart from "./ShoppingCart.js";
import "./JewelryList.css"





class JewelryList extends React.Component {
    

    render() {
        const PAGE_SHOW = 'show'
       
      
        
        return(
            <Carousel>
                <div>
                    
                </div>
            {/* <ShoppingCart jewelries={this.props.jewelries}/> */}
        {/* {this.props.jewelries.map(jewelry => <Jewelry jewelries={jewelry} key={jewelry.id} />)} */}
        {this.props.jewelries.map(jewelry => {
           
           return (

            <Carousel.Item>
    
    
                {/* <ReactCardFlip isFlipped={isFlipped} flipDirection={"vertical"}> */}
                {/* <button onClick={handleClick}></button> */}
                {/* <Card className="ice" style={{ width: '18rem'}} onClick={handleClick}> */}
           <div className="image">
                <img className="d-block w-50" src={jewelry.image} alt={jewelry.name} />
                </div>
                <br/>
                <br/>
                <Carousel.Caption>
                    <h2 className="item-name" style={{ color:"black"}}>{jewelry.name}</h2>
                    <p style={{ color: "white"}}>
                        ${jewelry.price}
                    </p>
                    {/* <Button onClick={(e) => props.addToCart(props.jewelry)} variant="outline-info">Add to Cart</Button> */}
                    <br/>
                    <Button  variant="outline-info">Show</Button>
                </Carousel.Caption>
                
    
    
    
                {/* </ReactCardFlip> */}
                {/* <img className="jewlImg" src={props.jewelry.image} />
                <h2 className="description">{props.jewelry.name}</h2>
                <h3>${props.jewelry.price}</h3>
                <p>{props.jewelry.description}</p>
                { <button onClick={(e) => props.addToCart(props.jewelry)}>Add-To-Cart</button>  }
                 */}
            </Carousel.Item>
        )
                    })}
                   
          </Carousel>
        )
    }
}
    export default JewelryList;
