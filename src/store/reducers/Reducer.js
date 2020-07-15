import { combineReducers } from "redux";
import UserReducer  from "../reducers/UserReducer";

const Reducer= combineReducers({
    User: UserReducer,
})

export default Reducer;