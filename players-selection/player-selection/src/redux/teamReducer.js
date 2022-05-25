import { ADD_PLAYER_IN_TEAM, REMOVE_PLAYER_FROM_TEAM } from "./type"

const initialState = {
    team : []
}

const teamReducer = (state=initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADD_PLAYER_IN_TEAM: return{
            ...state,
            team: [ ...state.team, action.payload ]
        }

        case REMOVE_PLAYER_FROM_TEAM: {

            let index = state.team.findIndex(obj=> obj.id === action.payload.id)
            let newTeam = [
                ...state.team.slice(0, index),
                ...state.team.slice(index+1)
            ]

            return{
                ...state,
                team: newTeam
            }

        }

        default: return state
    }

}

export default teamReducer