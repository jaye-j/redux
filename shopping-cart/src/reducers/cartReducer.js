let cartReducer = (state, action) => {
  if (state === undefined) {
    state = {
      totalCost: 0,
      productCarts: [],
    };
  }

  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        totalCost: state.totalCost + parseInt(action.productData.productPrice),
        productCart: state.productCart.concat(action.productData),
      };

    case "deleteProduct":
      let updatedArray = state.productCart.filter((productObj) => {
        return productObj.productName != action.productData.productName;
      });

      return {
        ...state,
        totalCost: state.totalCost - parseInt(action.productData.productPrice),
        productCart: updatedArray,
      };

    default:
      return state;
  }
};

export default cartReducer;
