import React, { Component } from "react";
import { connect } from "react-redux";
import increaseAction from "../actions/increaseAction";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Hello",
    };
  }

  render() {
    return (
      <>
        {/* Goal is to increment the global state */}

        <h1>{this.state.title}</h1>
        <span>{this.props.counter}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
      </>
    );
  }
}

//connect component to connect mapStateToProps
// and mapDispatchToProps
// dispatch
// mapStateToProps
let mapStateToProps = (state) => {
  return {
    counter: state.count,
  };
};

// mapDispatchToProps

let mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
