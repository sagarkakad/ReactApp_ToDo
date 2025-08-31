import React, {Component} from "react";

class Student extends Component{
    constructor(props)
    {
        super(props)
        console.log("Construcvtor")
    }
render(){
    return(
        <div>
            <h1>
                Test {this.props.name}   
                            </h1>
        </div>
        
    )
   
}
}
export default Student