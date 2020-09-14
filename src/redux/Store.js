import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { reducer as formReducer } from "redux-form";
import clientReducer from "./DashBoard/dataReducer";

const rootReducer = combineReducers({
  fetch: clientReducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  { fetch },
  applyMiddleware(thunk, logger)
);

export default store;
