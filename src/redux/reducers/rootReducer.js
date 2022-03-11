import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
})

export default rootReducer