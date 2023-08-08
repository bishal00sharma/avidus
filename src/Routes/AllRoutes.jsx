import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login />  }/>
        <Route path="/signup" element={ <SignUp />  }/>
    </Routes>
  )
}
export default AllRoutes ;