import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import Navbar from './Navbar';
import {Box} from '@chakra-ui/react'
import HomePage from './HomePage';
import Kidspage from './Kidspage';
import Signup from './Sign';
import SingleUserPage from './SingleUserPage';
const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
        <Box marginTop={'90px'} >
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
            <Route path="/kids" element={<Kidspage />}></Route>
            <Route path='/sign' element={<Signup />}/>
            <Route path='/men/:id' element={<SingleUserPage/>} />
            <Route path='/women/:id' element={<SingleUserPage/>} />
            <Route path='/kids/:id' element={<SingleUserPage/>} />
        </Routes>
        </Box>
      
    </div>
  )
}

export default AllRoutes
