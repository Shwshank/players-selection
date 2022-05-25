import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getPlayers, playerDetails } from '../redux/action';

export default function PlayerContainer() {
    
    const playerList = useSelector( state=> state.player.players )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlayers())
    }, []);

    useEffect(()=>{
        console.log(playerList)
    }, [playerList])

    const sendPlayerDetaild = (player) => {
        dispatch(playerDetails(player))
    }

    const renderPlayer = () => {
        return playerList.map((player)=>{
                return(
                <li key={player.name} >
                    {player.name} &nbsp; &nbsp;  
                    <button> + </button>
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
    <div className='childContainer1' >

        <h3> Select Players  </h3>
        <hr/>

        <ul>
            {renderPlayer()}            
        </ul>

    </div>
  )
}
