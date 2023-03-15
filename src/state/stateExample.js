import React, { Component } from 'react'

class StateComponent extends React.Component{

constructor(){
    super();
    this.state ={displayOption: true}
}

render(){
const element =this.state.displayOption?(<div><p><h3>This is example of state</h3></p></div>):null;
return(
    <div>
        <h1>Welcome to the project</h1>
        {element}
    </div>
)
}
}
export default StateComponent;