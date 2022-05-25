import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ClearDetails } from '../redux/action';

export default function PlayerDetail() {

    const playerDetails = useSelector(state=> state.details)

    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(playerDetails)
    },[playerDetails])

    const clearDetails = () => {
        dispatch(ClearDetails())
    }
    
  return (
    <div className='playerDetails' >
        <h3>Player Details</h3>  
        <br/>   
        { playerDetails.name != ''? 
        <>
            Name: {playerDetails.name} <br/>
            Role: {playerDetails.role} <br/>
            Id: {playerDetails.id} <br/>
            Point: {playerDetails.points} <br/>
            <br/>
            
            <button onClick={clearDetails} >
                Clear
            </button>
            </>
            : <></> }
            
            
        
    </div>
  )
}
