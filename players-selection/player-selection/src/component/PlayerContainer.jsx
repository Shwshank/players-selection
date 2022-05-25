import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getPlayers } from '../redux/action';

export default function PlayerContainer() {
    
    const playerList = useSelector( state=> state.player.players )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlayers())
    }, []);

    useEffect(()=>{
        console.log(playerList)
    }, [playerList])

  return (
    <div className='childContainer1' >

        <h3> Select Players  </h3>
        <hr/>

        <ul>
            <li>
                player 1 &nbsp; &nbsp;  
                <button> + </button>
                &nbsp; &nbsp;  
                <button> Details </button>
            </li>
            <br />
            
        </ul>

    </div>
  )
}
