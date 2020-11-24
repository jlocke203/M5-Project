import React from "react";
import Jewelry from "./Jewelry.js"


class JewelryList extends React.Component {
    render() {
        return(
            <div>
        {this.props.jewls.map((jewl) => {
            return (
              <Jewelry
                jewelry={jewl}
                
                
              />
            );
          })}
          </div>
        )
    }
}
    export default JewelryList;
