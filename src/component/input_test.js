import React, { Component } from "react";



class Myapp extends Component{
    render(){
        const  {data}=this.props.location;
        return(
            <div>
                <h1>life is good {data.name}</h1>
            </div>
        )
    }
}

export default Myapp; 
// {data[0].name}