import React, { Component } from "react";
import { connect } from "react-redux";
import deleteProduct from "../actions/deleteProduct";
import "./styles.css";

class Cart extends Component {
  render() {
    return (
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>#</th>
            </tr>
          </thead>

          <tbody>
            {this.props.productCart.map((obj, index) => {
              return (
                <tr key={index}>
                  <td>{obj.productName}</td>
                  <td>$ {obj.productPrice}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      this.props.onDeleteProduct(obj);
                    }}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
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
    onDeleteProduct: (productData) => dispatch(deleteProduct(productData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
