// import React, { Component } from "react"

// export default class StateExample extends Component{
//     constructor(){
//         super()
//          this.state ={
//           num:1
//    }
// }

// dec(){
//     if(this.state.num>1){
//         this.setState({num:this.state.num-1})
//     }
// }
// inc(){
//     this.setState({num:this.state.num+1})
// }
// render (){
// return(
//     <>

//     <h1>
//         Class Component  local State managemant
//     </h1>
//     <h2>num = : {this.state.num}</h2>
//     <button onClick={()=>this.dec()}>dec</button>
//     <button onClick={()=>this.inc()}>inc</button>

//     </>
// )
// }
// }

// import React, { Component } from "react";

// export default class StateExample extends Component {
//   constructor() {
//     super();
//     this.state = {
//       num: 1,
//     };
//   }

//   render() {
//     return (
//       <>
//         <h1>Class Component local State managemant</h1>
//         <h2>num = : {this.state.num}</h2>
//         <button
//           onClick={() => {
//             if (this.state.num > 1) {
//               this.setState({ num: this.state.num - 1 });
//             }
//           }}
//         >
//           dec
//         </button>
//         <button onClick={() => this.setState({ num: this.state.num + 1 })}>
//           inc
//         </button>
//       </>
//     );
//   }
// }

import React, { Component } from "react";

export default class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      num1: 100,
    };
  }

  render() {
    return (
      <>
        <h1>Class Component local State managemant</h1>
        <h2>num = : {this.state.num}</h2>
        <h2>num1 = : {this.state.num1}</h2>
        <button onClick={() => { if (this.state.num > 1) {
              this.setState({ 
                num: this.state.num - 1 ,
                num1: this.state.num1 - 1 
            });}
          }}>dec</button>
        <button onClick={() => { this.setState({ 
            num: this.state.num + 1 ,
            num1: this.state.num1 + 1 });
          }}> inc </button>
      </>
    );
  }
}
