import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { playerDetails, addPlayerInList, removePlayerFromTeam } from '../redux/action';


export default function TeamContainer() {

    const team = useSelector( state=> state.team.team )

    const dispatch = useDispatch()

    const removePlayerTeam = (player) => {
        dispatch( removePlayerFromTeam({id: player.id}) )
        dispatch( addPlayerInList(player) )
    }

    const sendPlayerDetaild = (player) => {
        dispatch(playerDetails(player))
    }

    const renderTeam = () => {
        return team.map((player)=>{
            return(
            <li key={player.id} >
                {player.name} &nbsp; &nbsp;  
                <button 
                onClick={e=> {
                    e.preventDefault()
                    removePlayerTeam(player)                        
                }}
                 > - </button>
                &nbsp; &nbsp;  
                <button onClick={ e =>{ 
                    e.preventDefault()
                    sendPlayerDetaild(player)}}>
                    Details </button>
                <br/>
                <br/>
            </li>
            )
        })
    }

  return (
    <div className='childContainer2' >

        <h4> Selected Team </h4>
        <hr/>

        <ul>
            {renderTeam()}            
        </ul>


    </div>
  )
}
