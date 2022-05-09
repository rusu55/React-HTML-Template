import React, {useState} from 'react'
import { Helmet } from 'react-helmet-async';

import Header from '../pages-parts/header';

const NotFound = () => {
  
  const [state] = useState({
      heading: 'Ooops, 404',
      paragraph: ' Sory the page you are lookin for does not exist!'
  })

  return (
    <>
    <Helmet>
        <title>Not found</title>
        <meta name='description' content='not found'></meta>
    </Helmet>
    <Header></Header>
    <h1>cdsfdsfvsd</h1>
    </>
  )
}

export default NotFound