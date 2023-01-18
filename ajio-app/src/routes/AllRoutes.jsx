import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import Navbar from './Navbar';
const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
