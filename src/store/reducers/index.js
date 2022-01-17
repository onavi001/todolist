import { combineReducers } from "redux";
import todolistReducer from "./todolist";
export default combineReducers({
  todolist: todolistReducer
});
