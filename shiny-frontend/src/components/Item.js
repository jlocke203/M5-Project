import React, { useState, useEffect } from "react"
import MainContainer from "./MainContainer";
import {Button} from "react-bootstrap"



const Item = (props) => {
   

    return (
        <div>
            <img src={props.jewelry.image} />
            <h2>{props.jewelry.name}</h2>
            <h3>${props.jewelry.price}</h3>
            <p>{props.jewelry.description}</p>
            {/* <p>{props.jewelry.quantity}</p> */}
            {/* { <button onClick={() => props.removeItem(props.jewelry)}>Delete</button>  } */}
            <Button onClick={() => props.removeItem(props.jewelry)} variant="outline-danger">Delete</Button>{' '}
            
        </div>
    )
}

export default Item