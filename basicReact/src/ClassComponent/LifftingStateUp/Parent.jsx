import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {

  render() {
    return (
      <>
        <h1>Class Component Sending Data from parent Component to Child</h1>
        <h2>Parents Component</h2>
        <hr />
        <Child 
        name ="Shuvam"
         arr={[1,2,3,4]}
         data = {[
            {id:1,name:"a"},
            {id:2,name:"b"},
            {id:3,name:"c"},
            {id:4,name:"d"},
            {id:5,name:"e"}
         ]}
         />
      </>
    );
  }
}
