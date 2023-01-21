import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import {Box} from '@chakra-ui/react'
import HomePage from './HomePage';
import Kidspage from './Kidspage';
import Signup from './Signup';
import Login from './Login';
import SingleUserPage from './SingleUserPage';
import Cart from './Cart';
import Querypage from './Querypage';
const AllRoutes = () => {
  return (
    <div>
        <Box marginTop={'90px'} >
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
            <Route path="/kids" element={<Kidspage />}></Route>

            
            <Route path='/cart' element={<Cart />}/>

            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/men/:id' element={<SingleUserPage/>} />
            <Route path='/querypage/:value' element={<Querypage />}></Route>
            <Route path='/women/:id' element={<SingleUserPage/>} />
            <Route path='/kids/:id' element={<SingleUserPage/>} />
        </Routes>
        </Box>
      
    </div>
  )
}

export default AllRoutes
