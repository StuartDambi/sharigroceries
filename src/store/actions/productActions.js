import { GET_PRODUCTS, LOAD_PRODUCTS, PRODUCTS_ERROR } from "../types";
import { API_URL } from "./authActions";

export const getProducts = (token) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS });

  try {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        "content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.status === 200) {
      dispatch({
        type: GET_PRODUCTS,
        payload: data.data,
      });
    } else {
      dispatch({ type: PRODUCTS_ERROR, payload: "something went wrong" });
    }
  } catch (error) {
    dispatch({ type: PRODUCTS_ERROR, payload: error });
  }
};
