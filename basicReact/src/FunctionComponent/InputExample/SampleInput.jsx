// import React ,{useState} from 'react'

// export default function SampleInput() {
//     var[name,setName]=useState("")
//    function getInputDate(e) {
//     setName(e.target.value)
//    }
//    function postData() {
//     console.log("Heloo"+name)
//    }
//   return (
//     <>
//     <div className="main">

//       <div className="center">
//         <h1>functinoal Components input Example </h1>
//         <h3>name : {name}</h3>
//         <input type="text" name="name" onChange={getInputDate} />
//         <button onClick={postData()}>Submit</button>
//       </div>
//     </div>
//     </>
//   )
// }


import React ,{useState} from 'react'

export default function SampleInput() {
    var[data,setData]=useState({
      name: "",
      email: "",
      phone: "",
      dsg: "",
      salary: "",
      city: "",
      state: ""
    })
   function getInputData(e) {
    var{name,value}=e.target
    setData((old)=>{
      return{
        ...old,
    [name]:value
      }
    })
   }
   function postData(e) {
    e.preventDefault()
    console.log(`
    Name         :    ${data.name}
    Email        :    ${data.email}
    Phone        :    ${data.phone}
    Designation  :    ${data.dsg}
    Salary       :    ${data.salary}
    City         :    ${data.city}
    State        :    ${data.state}
    `);
   }
  return (
    <>
    <div className="main">
      <div className="center">
      <h1>Class Component Input Example</h1>
                        <h3>Name : {data.name}</h3>
                        <h3>Email : {data.email}</h3>
                        <h3>Phone : {data.phone}</h3>
                        <h3>Designation : {data.dsg}</h3>
                        <h3>Salary : {data.salary}</h3>
                        <h3>City : {data.city}</h3>
                        <h3>State : {data.state}</h3>
                     <form onSubmit={postData}>
                     <input type="text" required name="name" onChange={getInputData} placeholder="Full Name" />
                        <input type="email"required  name="email" onChange={getInputData} placeholder="Email Address" />
                        <input type="text" required name="phone" onChange={getInputData} placeholder="Phone Number" />
                        <input type="text" required name="dsg" onChange={getInputData} placeholder="Designation" />
                        <input type="number"required  name="salary" onChange={getInputData} placeholder="Salary" />
                        <input type="text" required name="city" onChange={getInputData} placeholder="City Name" />
                        <input type="text" required name="state" onChange={getInputData} placeholder="State Name" />
                     </form>
                        <button>Submit</button>
      </div>
    </div>
    </>
  )
}
