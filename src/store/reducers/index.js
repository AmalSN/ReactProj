import ticReducer from "./ticReducer";
import snakeReducer from "./snakeReducer";
import ludoReducer from "./ludoReducer";
import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import loggedUserReducer from "./loggedUserReducer";

const allReducers = combineReducers({
    ticStat: ticReducer,
    snakeStat: snakeReducer,
    ludoStat: ludoReducer,
    userList: userReducer,
    currUser: loggedUserReducer
});

export default allReducers;