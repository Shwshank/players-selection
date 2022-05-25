import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { playerDetails } from '../redux/action';


export default function TeamContainer() {

    const team = useSelector( state=> state.team.team )

    useEffect(()=>{
        console.log(team)
    },[team])

    const dispatch = useDispatch()

    const removePlayerFromTeam = (player) => {
        // dispatch( removePlayerFromTeam({id: player.id}) )
        // dispatch( addPlayerToList(player) )
    }

    const sendPlayerDetaild = (player) => {
        dispatch(playerDetails(player))
    }

    const renderTeam = () => {
        return team.map((player)=>{
            return(
            <li key={player.name} >
                {player.name} &nbsp; &nbsp;  
                <button 
                onClick={e=> {
                    e.preventDefault()
                    removePlayerFromTeam(player)                        
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
