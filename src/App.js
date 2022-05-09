import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

import Routers from './components/common/routes'
import NavBar from './components/pages/pages-parts/nav';
import Toggle from './components/pages/pages-parts/toggle';
import AnimationsProvider from './context/providers/animationsProvider';

function App() {
  return (
    <BrowserRouter>    
    <AnimationsProvider>
        <Toggle />
        <NavBar /> 
        <HelmetProvider>
          <Routers/>           
        </HelmetProvider>   
      </AnimationsProvider>      
    </BrowserRouter>
  );
}

export default App;
