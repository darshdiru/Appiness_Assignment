import { FETCH_USER } from "./dataTypes";
import Data from "../../data/Data.json";

const initialState = {
  users: {},
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: Data,
      };

    default:
      return state;
  }
};

export default clientReducer;
