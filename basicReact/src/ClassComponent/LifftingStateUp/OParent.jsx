import React, { Component } from "react";
import ChildT from "./ChildT";

export default class TParent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  getData = (data) => {
    this.setState({ data: data });
  };
  render() {
    return (
      <>
        <h1>
          Class Component Sending Data from Child Component to Parent Component
        </h1>
        <h2>Parent Component</h2>
        {this.state.data.length ? (
          <table border="2px" cellPadding="10px">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          ""
        )}
        <ChildT getData={this.getData} />
      </>
    );
  }
}
