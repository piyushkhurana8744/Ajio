import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/women' element={<Women />} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
