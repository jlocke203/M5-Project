import React, { Component } from "react"
import JewelryList from "./JewelryList"

class JeweleryContainer extends Component {

    state = {
        allJewelry: []
    }

    componentDidMount = () => {
        fetch("http://localhost:3000/api/v1/jewelries")
        .then((res) => res.json())
        .then((jewel) => this.setState({allJewelry: jewel}))
    }


    render() {
        return(
            <div>
                <JewelryList jewls = {this.state.allJewelry}/>

            </div>
        )
    }
}

export default JeweleryContainer;