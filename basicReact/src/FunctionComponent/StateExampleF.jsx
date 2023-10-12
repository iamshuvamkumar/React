// import React ,{useState} from "react";

// export  default function StateExampleF() {
//     let [num,setNum]=useState(1);
//     let [num1,setNum1]=useState(100);
//     function dec() {
//         if(num>1){
//        setNum(num-1)
//        setNum1(num1-1)
//     }}
//     function inc() {
//         setNum(num+1)   
//         setNum1(num1+1)    }
//     return(
//         <>
//         <h1>Functional Component local State Example</h1>
//         <h2>num :{num}</h2>
//         <h2>num1 :{num1}</h2>
//         <button onClick={dec}>dec</button>
//         <button onClick={inc}>inc</button>
//         </>
//     )
// }


import React ,{useState} from "react";

export  default function StateExampleF() {
    let [num,setNum]=useState(1);
    let [num1,setNum1]=useState(100);
   
     
    return(
        <>
        <h1>Functional Component local State Example</h1>
        <h2>num :{num}</h2>
        <h2>num1 :{num1}</h2>
        <button onClick={()=>{
            if(num>1){
                setNum(num-1)
                setNum1(num1-1)
             }
         } }>dec</button>
        <button onClick={()=>{
        setNum(num+1)   
        setNum1(num1+1)    }}>inc</button>
        </>
    )
}