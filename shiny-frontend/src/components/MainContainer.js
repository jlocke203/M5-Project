import React, { useState, useEffect } from "react"
import Jewelry from "./Jewelry";
import JewelryContainer from "./JewelryContainer"
import ShoppingCart from './ShoppingCart';
import CustomPieceForm from './CustomPieceForm'
import Sidebar from "./Sidebar";
import { Container, Row, Col, Button } from "react-bootstrap"




const MainContainer = (props) => {

    const [allJewelry, setAllJewelry] = useState([])
    const [filter, setFilter] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/api/v1/jewelries")
            .then((res) => res.json())
            .then((jewel) => setAllJewelry(jewel))
    })

    const filterJewelry = () => {
        allJewelry.filter(jewel => jewel.name.includes(filter))
    }


    const displayPage = () => {
        if (props.page === 'cart') {
            return <ShoppingCart cart={props.cart} page={props.page} removeItem={props.removeItem} clearCart={props.clearCart} getTotalSum={props.getTotalSum} />
        } else if (props.page == 'custom') {
            return <CustomPieceForm />
        } else {
            return (
                <Container fluid style={{alignItems: "center"}}>
                    <Row style={{margin:"0", marginTop: "2rem"}} >
                        <Col xs={10}>
                            <JewelryContainer addToCart={props.addToCart} navigateTo={props.navigateTo} jewelries={allJewelry.filter(jewel => jewel.name.toLowerCase().includes(filter))} />
                        </Col>
                        <Col xs={2} style={{backgroundColor:"#343a40", fontStyle:"normal"}}>
                            
                            <br></br>
                           <br></br>
                           <br></br>
                            
                           <Button onClick={() => setFilter("necklace")} variant="info">Necklaces</Button>
                           <br></br>
                           <br></br>
                           <br></br>
                           <Button onClick={() => setFilter("pendant")} variant="info">Pendants</Button>
                           <br></br>
                           <br></br>
                           <br></br>
                           <Button onClick={() => setFilter("ring")} variant="info">Rings</Button>
                           <br></br>
                           <br></br>
                           <br></br>
                           <Button onClick={() => setFilter("datejust")} variant="info">Watches</Button>
                           <br></br>
                           <br></br>
                           <br></br>
                           <Button onClick={() => setFilter("")} variant="info">All</Button>

                        </Col>
                    </Row>

                </Container>
            )
        }

    }



    return (
        <div>
            {displayPage()}

        </div>
    )
}

export default MainContainer