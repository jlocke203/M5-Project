import React, { Component } from 'react';
import EditForm from './EditForm';

class ShoppingCart extends Component {

    state={
        isClicked: false,
        display: false,
        Items: [],
        count: 0
    }

    incrementMe = () => {
        let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
    }

    handleClick = () => {
        let newBoolean = !this.state.display;
        this.setState({
          display: newBoolean,
        });
      };

    handledClick = (e) => {
        this.setState({
            
            isClicked: !this.state.isClicked

        })

        
    }

    

    render() {
        return (
           <div>
                My ShoppingCart
                {this.props.jewelries.map(jewl => {
                    return <li>
                        {jewl.name}   
                        <br></br>
                        ${jewl.price}
                        <br></br>
                        {jewl.description}
                        <br></br>
                        {jewl.id}
                        {this.state.display ? <EditForm id={jewl.id} editItem = {this.props.editItem} /> : null}
                        <button onClick={() => this.props.deleteItem(this.props.jewelries.id)}>Delete</button>
                <button onClick={this.incrementMe} >Like: {this.state.count}</button>
                    </li>
                })}
           </div>
        )
    }
}

export default ShoppingCart;