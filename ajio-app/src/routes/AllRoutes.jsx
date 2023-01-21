import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Women from './Women';
import MenPage from './Men';
import Navbar from './Navbar';
import {Box} from '@chakra-ui/react'
import HomePage from './HomePage';
import Kidspage from './Kidspage';
import Signup from './Signup';
import Login from './Login';
import SingleUserPage from './SingleUserPage';
import Querypage from './Querypage';
const AllRoutes = () => {
  return (
    <div>
        <Box marginTop={"80px"}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
            <Route path='/women' element={<Women />} />
            <Route path='/men' element={<MenPage />} />
            <Route path="/kids" element={<Kidspage />}></Route>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/men/:id' element={<SingleUserPage/>} />
            <Route path='/querypage/:value' element={<Querypage />}></Route>
        </Routes>
        </Box>
      
    </div>
  )
}

export default AllRoutes
