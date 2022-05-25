import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers(
    {
        player: playerReducer,
        details: detailReducer
    }
)

export default rootReducer