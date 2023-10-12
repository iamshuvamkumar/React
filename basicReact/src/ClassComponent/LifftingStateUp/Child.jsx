import React ,{Component} from 'react'

export default class Child extends Component{
    render(){
        return(
            <>
            <h2>Child Component </h2>
            <h2>{this.props.name}</h2>
            <h2>{this.props.arr.join(",")}</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((item,index)=>{
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
}