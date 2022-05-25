import { PLAYER_DETAILS, ADD_PLAYER, REMOVE_PLAYER, GET_PLAYERS, CLEAR_DETAILS, ADD_PLAYER_IN_TEAM } from "./type";

export const getPlayers = () => {
    return (dispatch) => {
      
      fetch(`https://mocki.io/v1/8bb7f439-862c-4a4d-9714-5d74b5757f56`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          dispatch( playerList(data) )
        })
        .catch((err) => {
          console.log(err)
          
        })
    }
  }

  export const playerList = (data) =>{
    return {
        type: GET_PLAYERS,
        payload: data,
      }
  }

export function playerDetails(playerObj) {
    return {
        type: PLAYER_DETAILS,
        payload: {...playerObj}
    }
}

export function ClearDetails() {
    return {
        type: CLEAR_DETAILS
    }
}
export function addPlayer(playerObj) {

    return {
        type: ADD_PLAYER_IN_TEAM,
        payload: playerObj
    }
}

export function removePlayerFromPlayerList(id) {
    return {
        type: REMOVE_PLAYER,
        payload: id
    }
}