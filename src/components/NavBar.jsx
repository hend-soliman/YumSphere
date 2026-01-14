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

  return (
    <nav className="w-full bg-black">
      <div className="container mx-auto max-w-6xl">
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}



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