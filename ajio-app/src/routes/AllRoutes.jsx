import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import Navbar from './Navbar';
import {Box} from '@chakra-ui/react'
const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Box marginTop={'90px'} >
        <Routes>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
        </Routes>
        </Box>
      
    </div>
  )
}

export default AllRoutes
