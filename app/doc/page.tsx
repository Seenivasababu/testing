import Link from 'next/link'
import React from 'react'
import Webpage from '../Webpage'

const Documentaion = () => {
   const tabs = ['intro', 'conclusion']
  return (
   <div className='flex flex-col'>
       <section id="rise-of-next-js">
        <h2>The Rise of Next.js in Web Development</h2>
        <p>Your content here...</p>
      </section>

      <section id="revolutionizing-performance">
        <h2>Revolutionizing Performance with Server-Side Rendering and Static Site Generation</h2>
        <p>Your content here...</p>
      </section>

      <section id="file-system-routing">
        <h2>Navigating with Ease: File System-Based Routing in Next.js</h2>
        <p>Your content here...</p>
      </section>

      <section id="code-splitting">
        <h2>Efficiency Unleashed: Automatic Code Splitting and Hot Module Replacement</h2>
        <p>Your content here...</p>
      </section>

      <section id="seamless-deployment">
        <h2>Seamless Deployment: Next.js and the Future of Hosting Choices</h2>
        <p>Your content here...</p>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>Your content here...</p>
      </section>
    </div>
  )
}

export default Documentaion