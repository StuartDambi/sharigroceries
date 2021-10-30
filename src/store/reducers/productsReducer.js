import { GET_PRODUCTS, LOAD_PRODUCTS, PRODUCTS_ERROR } from "../types";

const initialState = {
  loading: false,
  products: [],
  product: {},
  productsMessage: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
