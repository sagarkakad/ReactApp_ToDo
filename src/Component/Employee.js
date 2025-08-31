import { Component } from "react";
import React from "react";
class Employee extends Component{

    constructor()
    {
        super();
        this.state={
            mName : "Sagar"
    }
}
    onclickBtn()
    {
        this.setState({
            mName : 'Rudra'
        })
    }
    render(){
        return(
            <div>
                <h1>
                {this.state.mName}
                </h1>
                <button onClick={()=> this.onclickBtn()}> click </button>
       
            </div>
             )
    }
}
export default Employee