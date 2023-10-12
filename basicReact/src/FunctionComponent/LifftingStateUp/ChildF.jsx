import React from 'react';

export default function ChildF(props) {
    return(
        <>
         <h2>Functional Child Component </h2>
            <h2>{props.name}</h2>
            <h2>{props.arr.join(",")}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item,index)=>{
                            return <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}