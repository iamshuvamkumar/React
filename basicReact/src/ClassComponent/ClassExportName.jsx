import { Component } from "react"

var name = "shuvam"
var arr = [1,2,3]
var obj ={
    id:123,
    name:"shk",
    course:"java"
}
function display() {
    return <h1>Function display</h1>
}
export default class ClassExportName extends Component{
    render(){
      return(
        <>
       <h1>Class Export Name Components</h1>
        </>
      )
    }
}
export  {name,arr,obj,display}; 