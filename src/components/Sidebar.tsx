import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-52 h-[100vh] space-y-4 font-bold text-xl pl-2 flex flex-col justify-center bg-blue-400 text-white'>
        <Link to={'/contacts'} className='inline-block'>Contact</Link>
        <hr />
        <Link to={'/charts-maps'} className='inline-block'>Charts and Maps</Link>
    </div>
  )
}

export default Sidebar