import { PLAYER_DETAILS, CLEAR_DETAILS } from "./type";

const initialState = {
    id: "",
    name: "",
    points: "",
    role: ""
}

export default function detailReducer ( state = initialState, action ) {
    switch(action.type) {
        
        case PLAYER_DETAILS: return{
            ...state,
            ...action.payload
        }

        case CLEAR_DETAILS: return{
            ...state,
            ...initialState
        }

        default: return state
    }
}