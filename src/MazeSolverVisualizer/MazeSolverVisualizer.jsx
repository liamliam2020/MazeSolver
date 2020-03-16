import React, { Component } from "react";
import Node from "./Node/Node";
import "./MazeSolverVisualizer.css";

export default class MazeSolverVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        woof
        <Node> </Node>
      </div>
    );
  }
}
