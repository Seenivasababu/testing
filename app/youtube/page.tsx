import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const YouTube = () => {
  return (
    <div className='h-full'>
      <div className='bg-slate-200 h-12'><Navbar/></div>
      <div className='grid grid-cols-6'>
         <div className='col-span-1 bg-slate-100'><Sidebar/></div>
         <div className='col-span-5 bg-slate-200'><Feed/></div>
      </div>
    </div>
  )
}

export default YouTube