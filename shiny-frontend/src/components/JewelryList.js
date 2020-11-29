import React from "react";
import Jewelry from "./Jewelry.js"
import ShoppingCart from "./ShoppingCart.js";



class JewelryList extends React.Component {
    

    render() {
       
        console.log(this.props.jewelries)
        return(
           <div>
        {/* {this.props.jewelries.map(jewelry => <Jewelry jewelries={jewelry} key={jewelry.id} />)} */}
        {this.props.jewelries.map(jewelry => {
				return (
                    // console.log(jewelry)
					<Jewelry
						key={jewelry.id}
						jewelry={jewelry}
						
						
					/>
				);
			})}
          </div>
        )
    }
}
    export default JewelryList;
