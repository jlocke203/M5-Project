// import React, { Component } from "react";
import EditForm from "./EditForm";
import firebase from 'firebase/app';
import React, { useState, useEffect } from "react"
import MainContainer from "./MainContainer";
import { Card, Button, Carousel } from "react-bootstrap"
import ReactCardFlip from 'react-card-flip'




const Jewelry = (props) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (

        <Carousel.Item>


            {/* <ReactCardFlip isFlipped={isFlipped} flipDirection={"vertical"}> */}
            {/* <button onClick={handleClick}></button> */}
            {/* <Card className="ice" style={{ width: '18rem'}} onClick={handleClick}> */}

            <img classname="d-block w-100" src={props.jewelry.image} alt={props.jewelry.name} />
            <Carousel.Caption>
                <h2>{props.jewelry.name}</h2>
                <p>
                    {/* ${props.jewelry.price} */}
                </p>
                {/* <Button onClick={(e) => props.addToCart(props.jewelry)} variant="outline-info">Add to Cart</Button> */}
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
}

export default Jewelry