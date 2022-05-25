import { PLAYER_DETAILS, ADD_PLAYER, REMOVE_PLAYER, GET_PLAYERS } from "./type";

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