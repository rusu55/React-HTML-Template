import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { getDestinations } from '../../../../store/slices/destinationsSlice';
import DestinationsList from './destinationsList';

const Destinations = () => {
  
  const dispatch = useDispatch()
  const {destinations} = useSelector(state => state?.destinationsSlice)
  const [state] =useState({
    heading: 'Discover the most engaging places in the world with Travel Friends',
    paragraph: 'Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.'
    }) 

   useEffect(()=>{
        dispatch(getDestinations())
     }, [])

  return (
    <div className='destinations'>
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-15'>
                    <h3 className='destinations__heading'>
                            {state.heading}
                    </h3>
                </div>
                <div className='col-6 p-15'>
                    <p className='destinations__paragraph'>
                        {state.paragraph}
                    </p>
                </div>  
            </div>
            <div className='destinations__block'>
                 <div className='row'>
                        {destinations.map((destination) =>(
                            <DestinationsList destination={destination} key={destination.id} />
                        ))}
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Destinations