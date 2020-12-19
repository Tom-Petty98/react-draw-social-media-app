import { combineReducers } from "redux";
import drawings from "./drawingReducer";
// import users from "./usersReducer";

const rootReducer = combineReducers({
  drawings
//  users
});

export default rootReducer;
