import {
  LOAD_USER,
  LOGIN_ERROR,
  LOGIN_USER,
  REGISTER_ERROR,
  REGISTER_USER,
} from "../types";

const initialState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  message: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        token: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
