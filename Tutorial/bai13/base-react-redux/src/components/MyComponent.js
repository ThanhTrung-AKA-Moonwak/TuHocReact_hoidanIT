//Clas component
//Function component
import React from "react"
class MyComponent extends React.Component{

    state = {
        name:'Dang Thanh Trung',
        phone:'0328616235',
        address: 'Hanoi'
    }
    //JSX
    render(){
       return(
        <div>My name is {this.state.name} and I'm from {this.state.address}</div>
       )
    }
}
export default MyComponent;