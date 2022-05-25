import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import playerReducer from "./playerReducer";
import teamReducer from "./teamReducer";

const rootReducer = combineReducers(
    {
        player: playerReducer,
        details: detailReducer,
        team: teamReducer
    }
)

export default rootReducer