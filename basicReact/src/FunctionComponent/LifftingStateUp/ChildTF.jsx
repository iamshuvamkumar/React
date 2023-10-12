import React from 'react'

export default function ChildTF(props) {
    function sendData() {
        props.getData([
            { id: 1001, name: "Nitin Chauhan", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
            { id: 1002, name: "Deepak Singh", dsg: "Trainer", salary: 98500, city: "Ghaziabad", state: "UP" },
            { id: 1003, name: "Mamta Jain", dsg: "Trainer", salary: 98500, city: "South Delhi", state: "Delhi" },
            { id: 1004, name: "Sumit Sharma", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" },
            { id: 1005, name: "Satyam Dixit", dsg: "Trainer", salary: 98500, city: "Faridabad", state: "Haryana" }
        ])
    }
    return (
        <>
            <h2>Child Component</h2>
            <button onClick={sendData}>Send Data</button>
        </>
    )
}
