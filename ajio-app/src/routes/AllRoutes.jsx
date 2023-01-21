import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import {Box} from '@chakra-ui/react'
import HomePage from './HomePage';
import Kidspage from './Kidspage';
import Signup from './Sign';
import SingleUserPage from './SingleUserPage';
import Cart from './Cart';
const AllRoutes = () => {
  return (
    <div>
        <Box marginTop={'90px'} >
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
            <Route path="/kids" element={<Kidspage />}></Route>
            <Route path='/sign' element={<Signup />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/men/:id' element={<SingleUserPage/>} />
        </Routes>
        </Box>
      
    </div>
  )
}

export default AllRoutes
