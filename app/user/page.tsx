import Link from 'next/link'
import React from 'react'
import TweetList from '../components/TweetList'

const UserPage = () => {
   
  return (
    <div>
      <Link href={'/tweet'} className='m-4 p-2 bg-slate-300'>Go to Main page</Link>
      <TweetList isUser={true}/>
   </div>
  )
}

export default UserPage