import { PLAYER_DETAILS } from "./type";

export function playerDetails(playerObj) {
    return {
        type: PLAYER_DETAILS,
        payload: {playerObj}
    }
}