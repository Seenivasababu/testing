import React from 'react'

const Sidebar = () => {
   const youtubeSidebarItems = [
      'Home',
      'Liked videos',
      'Watch later',
      'Shorts',
      'Settings',
      'Trending',
      'Subscriptions',
      'Library',
      'History',
    ];
  return (
    <div>
      {youtubeSidebarItems.map(items=>{
         return <div className='m-2 px-4 py-2 hover:bg-slate-300 rounded-lg transition-all'>
            {items}
         </div>
      })}
    </div>
  )
}

export default Sidebar