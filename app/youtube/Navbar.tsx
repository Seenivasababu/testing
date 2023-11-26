import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-2'>
      <h1>Youtube</h1>
      <input placeholder='Search the video' className='w-96 rounded-full px-3 py-1'/>
      <h1>Seenivasababu</h1>
    </div>
  )
}

export default Navbar