import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="w-full bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-3xl font-bold text-white">logo</h1>

          <ul className="flex gap-4 text-white">
            <li>
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
            </li>
          </ul>

          <Link to="/reservations">Make A Reservation</Link>
        </div>
      </div>
    </nav>
  )
}
