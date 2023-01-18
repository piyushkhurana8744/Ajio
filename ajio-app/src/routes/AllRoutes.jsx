import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
