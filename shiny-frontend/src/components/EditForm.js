import React, { Component } from "react";

class EditForm extends Component{
    state = {
        description: "",
        price: ""
    }


      handleSubmit = (e) => {
          e.preventDefault()
          this.props.editItem(this.state.description, this.state.price, this.props.id)
          console.log(this.state.description, this.state.price)
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
<div>
        <h1>CustomPiece Form</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <label for="description">DESCRIPTION:</label>
        <input onChange={(e) => this.handleChange(e)} type="text" id="description" name="description"></input>
        <label for="price">WTP:</label>
        <input onChange={(e) => this.handleChange(e)} type="price" id="price" name="price"></input>
        <input type="submit"></input>
        </form>
    </div>

        )
    }

} 

export default EditForm
