import React, { useState, useEffect } from "react"
import MainContainer from "./MainContainer";



const Item = (props) => {

    return (
        <div>
            <img src={props.jewelry.image} />
            <h2>{props.jewelry.name}</h2>
            <h3>{props.jewelry.price}</h3>
            <p>{props.jewelry.description}</p>
            { <button>Delete</button>  }
            
        </div>
    )
}

export default Item