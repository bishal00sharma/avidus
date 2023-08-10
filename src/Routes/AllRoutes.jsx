import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';
import Rooms from '../Components/Rooms/Rooms';
import { SignUpMerchant } from '../Pages/SignUpMerchant';
import CreateProperty from '../Components/Rooms/CreateProperty';
import MyAccount from '../Pages/MyAccount';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={ <Login />  }/>
        <Route path="/signup" element={ <SignUp />  }/>
        <Route path="/myaccount" element={ <MyAccount />  }/>
        <Route path="/signUpMerchant" element={ <SignUpMerchant />  }/>
        <Route path="/rooms" element={ <Rooms />  }/>
        <Route path="/createProperty" element={ <CreateProperty />  }/>
    </Routes>
  )
}
export default AllRoutes ;