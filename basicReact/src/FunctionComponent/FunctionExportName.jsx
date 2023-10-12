

var name1 = "shuvam"
var arr1 = [1,2,3]
var obj1 ={
    id:123,
    name:"shk",
    course:"java"
}
function display1() {
    return <h1>Function display</h1>
}
export default function FunctionExportName() {
   
      return(
        <>
       <h1>Function Export Name Components</h1>
        </>
      )
     
}
export  {name1,arr1,obj1,display1}; 