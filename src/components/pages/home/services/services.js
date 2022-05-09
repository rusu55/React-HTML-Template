import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ServicesLeft from './servicesLeft';
import ServicesList from './servicesList';
import { getServices } from '../../../../store/slices/servicesSlice';


const Services = () => {
  
  const [state] = useState({
        heading: 'why customers love travel friends? Becouse we provide unique services.',
        subHeading: 'our aim is to provide professional and unique services to customers, and we have provided high quality services to our customers.'
  })  
  
  const dispatch = useDispatch()
  const {services} = useSelector(state=> state?.servicesSlice)

  useEffect(() => {
        dispatch(getServices())
  }, [])

  return (
    <div className='services'>
        <div className='services__contents'>
            <div className='container'>
                <div className='row ml-minus-15 mr-minus-15 services__contents__container'>
                    <div className='col-6 p-15'>
                        <ServicesLeft heading={state.heading} subHeading={state.subHeading} />
                    </div>
                    <div className='col-6 p-15'>
                        <ServicesList services={services} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services