import React from "react";
import Jewelry from "./Jewelry.js"
import ShoppingCart from "./ShoppingCart.js";




class JewelryList extends React.Component {
    

    render() {
       
      
        
        return(
            <div>
            {/* <ShoppingCart jewelries={this.props.jewelries}/> */}
        {/* {this.props.jewelries.map(jewelry => <Jewelry jewelries={jewelry} key={jewelry.id} />)} */}
        {this.props.jewelries.map(jewelry => {
           
				return (
					<Jewelry
						key={jewelry.id}
                        jewelry={jewelry}
						addToCart={this.props.addToCart}
						
                        />
                        );
                    })}
                   
          </div>
        )
    }
}
    export default JewelryList;
