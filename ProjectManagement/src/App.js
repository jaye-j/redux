import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        {this.props.projects.map((project) => {
          return (
            <li key={project.id}>
              {project.title} | {project.category}
            </li>
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, null)(App);
