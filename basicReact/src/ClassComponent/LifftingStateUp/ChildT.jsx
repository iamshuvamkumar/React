import React, { Component } from 'react'

export default class ChildT extends Component {
 

    sendFromChild(){
        this.props.getData([
            {id:1,name:"a"},
            {id:2,name:"b"},
            {id:3,name:"c"},
            {id:4,name:"d"},
            {id:5,name:"e"}
          ])
      }
    
  render() {
    return (
     <>
    <h1>Child Components </h1>
    <button onClick={()=>this.sendFromChild()}>Send Data to Parent</button>
     </>
    )
  }
}
