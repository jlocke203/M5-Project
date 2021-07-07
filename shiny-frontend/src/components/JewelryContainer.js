import React, { Component } from "react"
import JewelryList from "./JewelryList"
import ShoppingCart from "./ShoppingCart"
import CustomPieceForm from "./CustomPieceForm"






class JeweleryContainer extends Component {
    

    state = {
        allJewelry: []
    }


    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/jewelries")
        .then((res) => res.json())
        .then((jewel) => this.setState({allJewelry: jewel}))
    }

    
    // addToCart = (jewelry) => {
    //     this.setState({
    //         cart: [...this.state.cart, jewelry]
    //     })
    //     console.log(this.state.cart)
    // }

    // deleteItem = (id) => {
    //     this.setState({cart: this.state.cart.filter((jewl) => jewl.id != id)})
    // }

    // deleteJewlery = (id) => {
    //     this.setState({allJewelry: this.state.allJewelry.filter((jewl) => jewl.id != id)})
    // }

    // calledClick = (jewelry) => {
    //     this.setState({
    //         cart: [...this.state.cart, jewelry]
    //     })
    // }

    // updateFilter = (filter) => {
    //     this.setState({ filter });
    //   };
    
    // displayNecklaces = () => {
    //     let displayNecklaces = this.state.allJewelry 
    //     if (this.state.filter !== "All") {
    //         displayNecklaces = displayNecklaces.filter(jewl => jewl.price === this.state.filter) 
    //     }
    //     return displayNecklaces 
    // }
    


    render() {
        console.log(this.state.allJewelry)
        return(
           
            <div>
               
               
               <JewelryList jewelries={this.props.jewelries} addToCart={this.props.addToCart} navigateTo={this.props.navigateTo}  /> 
               

               

            </div>
            
        )
    }
}


export default JeweleryContainer;