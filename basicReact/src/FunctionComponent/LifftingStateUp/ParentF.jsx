import React from 'react';
import ChildF from './ChildF';
 
export default function ParentF(){
  return(
    <>  
      <h1>Functional Component Sending Data From Parent to Child </h1>
      <h2>Parent Component </h2>
      <hr/>
      <ChildF
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
  )
}