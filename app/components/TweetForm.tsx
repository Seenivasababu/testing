'use client'
import axios from 'axios';
import React, { useState } from 'react'

const TweetForm = () => {
   const [content, setContent] = useState('');
  
  
   const handleSubmit = async () => {
     try {
       const userId = localStorage.getItem('token');
       console.log(userId);
 
       const data = await axios.post('/api/tweet', { content, userId });
       setContent('');
       console.log('Tweet posted');
     } catch (error) {
       console.log('Something went wrong');
     }
   };
   return (
     <div className="flex flex-col gap-2 p-4">
       <input
         className="bg-slate-100 w-96 h-12 rounded-lg p-2"
         placeholder="What happening"
         value={content}
         onChange={(e) => setContent(e.target.value)}
       />
       <button
         className="bg-blue-400 rounded-lg px-3 py-1 w-96"
         onClick={handleSubmit}
       >
         Tweet
       </button>
     </div>
   );
}

export default TweetForm