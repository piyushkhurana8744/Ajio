import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import Navbar from './Navbar';
import HomePage from './HomePage';
const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
        </Routes>
      
    </div>
  )
}

export default AllRoutes
