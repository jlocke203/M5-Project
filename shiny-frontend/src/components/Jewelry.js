// import React, { Component } from "react";
import EditForm from "./EditForm";
import firebase from 'firebase/app';
import React, { useState, useEffect } from "react"
import MainContainer from "./MainContainer";
import { Card, Button, Carousel } from "react-bootstrap"
import ReactCardFlip from 'react-card-flip';



const Jewelry = (props) => {

  return (

    <div>




      <Card className="ice" style={{ width: '14rem', minHeight: '26rem', marginBottom: '2rem' }}>

        <Card.Img classname="" src={props.jewelry.image} />
        <Card.Body>

          <Card.Title>{props.jewelry.name}</Card.Title>
          <Card.Text>
            ${props.jewelry.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={(e) => props.addToCart(props.jewelry)} variant="outline-info">Add to Cart</Button>
        </Card.Footer>
      </Card>



    </div>


  )
}

export default Jewelry