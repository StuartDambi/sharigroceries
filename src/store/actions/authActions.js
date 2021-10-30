import {
  LOAD_USER,
  LOGIN_ERROR,
  LOGIN_USER,
  REGISTER_ERROR,
  REGISTER_USER,
} from "../types";

export const API_URL = "http://localhost:5000/api/v1";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER });
    const response = await fetch(`${API_URL}/users/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      dispatch({ type: LOGIN_USER, payload: data.data });
    } else {
      dispatch({
        type: LOGIN_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
  }
};
