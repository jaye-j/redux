import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <>
        Hello World
        <ul>
          {this.props.proj.map((project) => {
            return (
              <li key={project.id}>
                {project.title} | {project.category}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    proj: state.projects,
  };
};

export default connect(mapStateToProps, null)(App);
