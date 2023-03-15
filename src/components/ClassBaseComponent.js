import React, { Component } from 'react'

class StudentName extends React.Component{

    render(){

return (
    <>
    <h1>Student Name List</h1>
    </>
);
    }
}

class List extends Component{
render(){
 return(
<ui>
<li>{this.props.data.name}</li>
</ui>
);
}
}

class ClassBaseComponent extends Component{
constructor(){

    super();
    this.state ={
      data:[
            {
                "name":"Karanveer Singh"
            },
            {
                "name":"ramkumar"
            },
            {
                "name":"dev kumar"
            }
        ]
    }
}

    render(){

        return(
        <div>
            <StudentName />
            <ul >{this.state.data.map((item) => <List data ={item} />)}</ul>
        </div>
        );
    }
}

export default ClassBaseComponent;