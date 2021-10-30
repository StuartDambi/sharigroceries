import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import productsReducer from "./productsReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "shop"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  shop: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);
