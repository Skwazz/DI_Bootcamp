import { render } from "@testing-library/react";
import React from "react";

class Car extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h1>
                    {/* This car is a {this.props.carinfo.color} {this.props.carinfo.model} */}
                </h1>
            </div>
        )
    }
}



export default Car