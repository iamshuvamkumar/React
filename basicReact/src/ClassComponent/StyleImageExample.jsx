import React, { Component } from 'react';
var headingStyle ={
    color:'#ffff',
    padding:"10px",
    backgroundColor:"green"
}
var pasStyle ={
    color:'#ffff',
    padding:"10px",
    backgroundColor:"red"
}
export default class StyleImageExample extends Component{
    render(){
        return(
        <>
        <div className="main">
            <div className="center">
                <h2 style={{ color: "white", backgroundColor: "navy",padding:"10px"}}>Css and Images Example in function Components </h2>
                <div className="item">
            <img src="/Imagers/1.jpg" alt="" />
            <img src="/Imagers/2.jfif" alt="" />
            <img src="/Imagers/iphone3.jpg" alt="" />
                </div>
                <h3 style={headingStyle}>Lorem ipsum dolor sit amet.</h3>
                <p style={pasStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, esse?</p>
            </div>
        </div>
        </>
    )}
} 