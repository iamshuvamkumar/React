import React, { useState } from 'react'
import ChildTF from './ChildTF'


export default function OParentF() {
    let [data, setData] = useState([])
    function getData(data) {
        setData(data)
    }
    return (
        <>
            <h1>Functional Component Sending Data from Child to Parent Example</h1>
            <h2>Parent Component</h2>
            {
                data.length ?
                    <table border="2px" cellPadding="10px">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Salary</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dsg}</td>
                                        <td>{item.salary}</td>
                                        <td>{item.city}</td>
                                        <td>{item.state}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table> : ""
            }
            <ChildTF getData={getData} />
        </>
    )
}
