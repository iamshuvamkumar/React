import React, { Component } from 'react'

export default class InputSample extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            dsg: "",
            salary: "",
            city: "",
            state: ""
        }
    }
    getInputData(event) {
        // console.log(event.target.name,event.target.value);
        var { name, value } = event.target
        // if (name === "name")
        //     this.setState({ name: value })
        // else if (name === "email")
        //     this.setState({ email: value })
        // else if (name === "phone")
        //     this.setState({ phone: value })
        // else if (name === "dsg")
        //     this.setState({ dsg: value })
        // else if (name === "salary")
        //     this.setState({ salary: value })
        // else if (name === "city")
        //     this.setState({ city: value })
        // else
        //     this.setState({ state: value })


        this.setState(()=>{
            return{
                ...this.state,
                [name]:value
            }
        })
    }
    postData() {
        alert(`
            Name         :    ${this.state.name}
            Email        :    ${this.state.email}
            Phone        :    ${this.state.phone}
            Designation  :    ${this.state.dsg}
            Salary       :    ${this.state.salary}
            City         :    ${this.state.city}
            State        :    ${this.state.state}
        `)
    }
    render() {
        return (
            <>
                <div className="main">
                    <div className="center">
                        <h1>Class Component Input Example</h1>
                        <h3>Name : {this.state.name}</h3>
                        <h3>Email : {this.state.email}</h3>
                        <h3>Phone : {this.state.phone}</h3>
                        <h3>Designation : {this.state.dsg}</h3>
                        <h3>Salary : {this.state.salary}</h3>
                        <h3>City : {this.state.city}</h3>
                        <h3>State : {this.state.state}</h3>
                     <form onSubmit={()=>this.postData()}>
                     <input type="text" required name="name" onChange={(event) => this.getInputData(event)} placeholder="Full Name" />
                        <input type="email"required  name="email" onChange={(event) => this.getInputData(event)} placeholder="Email Address" />
                        <input type="text" required name="phone" onChange={(event) => this.getInputData(event)} placeholder="Phone Number" />
                        <input type="text" required name="dsg" onChange={(event) => this.getInputData(event)} placeholder="Designation" />
                        <input type="number"required  name="salary" onChange={(event) => this.getInputData(event)} placeholder="Salary" />
                        <input type="text" required name="city" onChange={(event) => this.getInputData(event)} placeholder="City Name" />
                        <input type="text" required name="state" onChange={(event) => this.getInputData(event)} placeholder="State Name" />
                     </form>
                        <button onClick={() => this.postData()}>Submit</button>
                    </div>
                </div>
            </>
        )
    }
}


// export default class InputSample extends Component {
//     constructor(){
//         super()
//         this.state={
//             name:""
//         }
//     }
//     getInputData(event){
//         this.setState({name:event.target.value})
//     }
//     postData(){
//         alert(`hello${this.state.name}`)
//     }
//   render() {
//     return (
//      <>
//        <div className="main">
//             <div className="center">
//                 <h1>Class Component Input Example</h1>
//                 <h3>Name : {this.state.name}</h3>
//                 <input type="text" name="name" onChange={(event) => this.getInputData(event)} placeholder="Full Name" />
//                 <button onClick={()=>this.postData()}>Submit</button>
//             </div>
//         </div>
//      </>
//     )
//   }
// }
