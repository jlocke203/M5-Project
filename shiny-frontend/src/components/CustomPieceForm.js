import React, { Component } from "react";
import {Form, Row, Col, Button, Modal} from "react-bootstrap"

 class CustomPieceFoem extends Component {
     state = {
         description: "",
         price: "",
         show: false
     }

     handleModal = () => {
        this.setState({show: !this.state.show})
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToCart(this.state)
    }

    handleChange = (e) => {
        let {value, name} = e.target 
        // console.log(name, value)
        this.setState({
          [name]: value 
        })
      }


     render(){
         return(
            <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Description" />
              </Col>
              <Col>
                <Form.Control placeholder="Amount" />
              </Col>
            </Row>
              <Button onClick={() =>{this.handleModal()}}  variant="success">Send</Button>{''}
              <Modal show={this.state.show}>

                        <Modal.Header></Modal.Header>
                        <Modal.Body>
                            Our team will contact you shortly to discuss more about your piece. Thank you
                        </Modal.Body>
                        <Modal.Footer>
            
                            <Button onClick={() =>{this.handleModal()}}>
                                Understood
                            </Button>
                        </Modal.Footer>
                                 </Modal>
          </Form>
            // <div className="custom">
            //     <h1>CustomPiece Form</h1>
            //     <form onSubmit={(e) => this.handleSubmit(e)}>
            //     <label for="description">DESCRIPTION:</label>
            //     <input onChange={this.handleChange} type="text" id="description" name="description"></input>
            //     <label for="price">WTP:</label>
            //     <input onChange={this.handleChange} type="number" id="price" name="price"></input>
            //     <input type="submit"></input>
            //     </form>
            // </div>
         )
     }

 }

 export default CustomPieceFoem