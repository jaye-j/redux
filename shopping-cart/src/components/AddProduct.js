import React, { Component } from "react";
import { connect } from "react-redux";
import addProduct from "../actions/addProduct";

class AddProduct extends Component {
  render() {
    return <>add product</>;
  }
}

let mapStateToProps = (state) => {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (productCart) => dispatch(addProduct(productCart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
