import { GET_PLAYERS } from "./type"

const initialState = {
    players: []
}

const playerReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_PLAYERS: return {
            ...state,
            players: [...action.payload]
        }

        default: return state

    }

}

export default playerReducer