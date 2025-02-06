import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className='text-white font-bold' href={"/"}>Logo</Link>
        <Link className='bg-white p-2' href={"/addTopic"}>Add Topic</Link>
    </nav>
  )
}

export default Navbar

// Create Next
// git settings
// 15:25 Main folder structure
// 16:00 Connect to MongoDB, Create Cluster and Settings
// 17:00 Postman test
// 17:30 Postman test done, starting the connection of Front-End and Backend
