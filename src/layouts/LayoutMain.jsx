import React from 'react'

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Container from '../pages/Container';

export default function LayoutMain() {
  return (
    <div className='w-full  bg-white'>
      <NavBar />
      <Container>
      <Outlet />
    </Container>
    </div>
    
      
   
  );
}
