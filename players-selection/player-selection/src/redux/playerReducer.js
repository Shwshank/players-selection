import { GET_PLAYERS, REMOVE_PLAYER } from "./type"

const initialState = {
    players: []
}

const playerReducer = (state = initialState, action) => {

    switch(action.type){

        case GET_PLAYERS: return {
            ...state,
            players: [...action.payload]
        }


        case REMOVE_PLAYER: {

            let index = state.players.findIndex(obj=> obj.id === action.payload.id)
            let newTeam = [
                ...state.players.slice(0, index),
                ...state.players.slice(index+1)
            ]

            return{
                ...state,
                players: newTeam
            }

        }

        default: return state

    }

}

export default playerReducer