import React, { Component } from "react";

const Jewelry = (props) => {
    return(
        <div>
            <img src = {props.jewelry.image}/>
            <h2>{props.jewelry.name}</h2>
    <h3>{props.jewelry.price}</h3>
                    <p>{props.jewelry.description}</p>
        </div>
    )
}

export default Jewelry