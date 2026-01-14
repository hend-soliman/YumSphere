<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {

  const links = [
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Menu", path: "/menu"},
    {name: "Contact", path: "/contact"},
  ];

  const [isOpen, setIsOpen] = useState(false);
=======
import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";

export default function NavBar() {

  const links =[
    {name: "Home", path: "/"},
    {name: "About", path: "/about"},
    {name: "Menu", path:"/menu"},
    {name: "contact", path:"/contact"},
  ];

 const [isOpen, setIsOpen] = useState(false);
>>>>>>> karim-branch

  return (
    <nav className="w-full bg-black">
      <div className="container mx-auto max-w-6xl">
<<<<<<< HEAD
        <div className="flex items-center justify-between py-4 relative">

          <button className='md:hidden text-white hover:text-[#ffc554] order-1' onClick={()=>setIsOpen(!isOpen)}>
            <HiMenu size={28} />
          </button>

          <h1 className="text-3xl font-bold text-white mx-auto md:mx-0 order-2 md:order-1">
            logo
          </h1>

          <ul className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={({isActive}) => 
                  `transition transform duration-200 ${isActive ? "text-[#ffc554] scale-105" : "text-[#748194] hover:text-[#ffc554] hover:scale-105"}`}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/cart" className="text-white hover:text-[#ffc554] order-3 ml-4">
            <FiShoppingCart size={28} />
          </Link>

        </div>{isOpen && (
          <ul className='md:hidden flex flex-col gap-4 py-4'>
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} onClick={() => setIsOpen(false)} 
                className={({isActive}) =>  `block transition transform duration-200 ${isActive ? "text-[#ffc554] scale-105": "text-[#748194] hover:text-[#ffc554] hover:scale-105" }`}>
                  {link.name}
                </NavLink>
=======
        <div className="flex items-center justify-between py-4">

          <h1 className="text-3xl font-bold text-white">logo</h1>

          <ul className="hidden md:flex gap-4 text-white">
            {links.map((link) => (
            <li key={link.path}>
              <NavLink to={Link.path} className={({isActive})=>`transition hover:text-[#ffc554] ${isActive ? "text-[#748194]" : "text-[#ffc554]" }`}>{link.name}</NavLink>
            </li>
            ))}
          </ul>

          <button className='md:hidden hover:text-[#ffc554]'onClick={()=>setIsOpen(!isOpen)}>
           <HiMenu />
          </button>

          <Link to="/reservations">Make A Reservation</Link>
        </div>

        {isOpen && (
          <ul className='md:hidden flex flex-col gap-4 py-4'>
            {links.map((link)=>(
              <li key={link.path}>
                <NavLink to={link.path} onClick={()=> setIsOpen(fales)} className={({isActive}) => `block transition hover:text-[#ffc554] ${isActive ? "text-[#748194]" :"text-[#ffc554]"}`}></NavLink>
                {link.name}
>>>>>>> karim-branch
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> karim-branch
}



<<<<<<< HEAD
















=======
 {/* <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/menu" className="flex items-center gap-1">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
>>>>>>> karim-branch
