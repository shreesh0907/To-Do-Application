import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-cyan-700'>
    <div className='text-white flex justify-between align-middle px-10 py-8 text-3xl'>
        <Link to="/">
        <h1>To Do Tasks Manager</h1>
        </Link>
    </div>
    </header>
  )
}

export default Navbar