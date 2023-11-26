'use client';
import React from 'react';
import Link from 'next/link';

const Webpage = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      
      <div className='p-4 m-4 bg-slate-200 rounded-lg gap-4 space-y-4 col-span-2'>
        <section id="rise-of-next-js">
          <h2 className="bg-green">The Rise of Next.js in Web Development</h2>
          <p>
            The landscape of web development is continually evolving, and one
            significant advancement in recent years has been the emergence of
            Next.js. As a powerful and flexible framework built on top of
            React.js, Next.js has gained widespread adoption for its ability to
            address various challenges faced by developers in modern web
            applications.
            The landscape of web development is continually evolving, and one
            significant advancement in recent years has been the emergence of
            Next.js. As a powerful and flexible framework built on top of
            React.js, Next.js has gained widespread adoption for its ability to
            address various challenges faced by developers in modern web
            applications.
            The landscape of web development is continually evolving, and one
            significant advancement in recent years has been the emergence of
            Next.js. As a powerful and flexible framework built on top of
            React.js, Next.js has gained widespread adoption for its ability to
            address various challenges faced by developers in modern web
            applications.
          </p>
        </section>

        <section id="revolutionizing-performance">
          <h2 className="bg-green">
            Revolutionizing Performance with Server-Side Rendering and Static
            Site Generation
          </h2>
          <p>
            At its core, Next.js introduces the concept of Server-Side Rendering
            (SSR) and Static Site Generation (SSG), elevating the performance
            and search engine optimization (SEO) capabilities of web
            applications. This departure from traditional client-side rendering
            allows developers to pre-render pages on the server, resulting in
            faster initial page loads and improved user experiences. Whether
            it's a dynamic e-commerce platform or a content-driven website,
            Next.js empowers developers to create performant applications
            without compromising on complexity.
            At its core, Next.js introduces the concept of Server-Side Rendering
            (SSR) and Static Site Generation (SSG), elevating the performance
            and search engine optimization (SEO) capabilities of web
            applications. This departure from traditional client-side rendering
            allows developers to pre-render pages on the server, resulting in
            faster initial page loads and improved user experiences. Whether
            it's a dynamic e-commerce platform or a content-driven website,
            Next.js empowers developers to create performant applications
            without compromising on complexity.
            At its core, Next.js introduces the concept of Server-Side Rendering
            (SSR) and Static Site Generation (SSG), elevating the performance
            and search engine optimization (SEO) capabilities of web
            applications. This departure from traditional client-side rendering
            allows developers to pre-render pages on the server, resulting in
            faster initial page loads and improved user experiences. Whether
            it's a dynamic e-commerce platform or a content-driven website,
            Next.js empowers developers to create performant applications
            without compromising on complexity.
          </p>
        </section>

        <section id="file-system-routing">
          <h2 className="bg-green">Navigating with Ease: File System-Based Routing in Next.js</h2>
          <p>
            One standout feature of Next.js is its intuitive file system-based
            routing. By organizing pages within the project directory,
            developers can seamlessly create routes without the need for
            additional configuration. This simplicity not only enhances code
            readability but also accelerates the development process, making it
            an ideal choice for projects of varying scales.
            One standout feature of Next.js is its intuitive file system-based
            routing. By organizing pages within the project directory,
            developers can seamlessly create routes without the need for
            additional configuration. This simplicity not only enhances code
            readability but also accelerates the development process, making it
            an ideal choice for projects of varying scales.
            One standout feature of Next.js is its intuitive file system-based
            routing. By organizing pages within the project directory,
            developers can seamlessly create routes without the need for
            additional configuration. This simplicity not only enhances code
            readability but also accelerates the development process, making it
            an ideal choice for projects of varying scales.
          </p>
        </section>

        <section id="code-splitting">
          <h2 className="bg-green">
            Efficiency Unleashed: Automatic Code Splitting and Hot Module
            Replacement
          </h2>
          <p>
            Efficiency Unleashed: Automatic Code Splitting and Hot Module
            Replacement The framework's commitment to developer experience
            extends beyond routing, with built-in features like automatic code
            splitting and hot module replacement. Next.js intelligently splits
            code into smaller, manageable chunks, ensuring that only the
            necessary code is sent to the client. This results in faster page
            loads and improved overall performance. Furthermore, the integration
            of hot module replacement enables developers to see changes in
            real-time, streamlining the development workflow and reducing
            iteration times.
          </p>
        </section>

        <section id="seamless-deployment">
          <h2 className="bg-green">
            Seamless Deployment: Next.js and the Future of Hosting Choices
          </h2>
          <p>
            Next.js also places a strong emphasis on seamless deployment. With
            support for a wide range of hosting options, including popular
            platforms like Vercel and Netlify, deploying a Next.js application
            is a straightforward process. This flexibility not only accommodates
            diverse deployment preferences but also aligns with the framework's
            commitment to providing developers with choices that suit their
            needs.
          </p>
        </section>

        <section id="conclusion">
          <h2 className="bg-green">Conclusion</h2>
          <p>
            In conclusion, Next.js stands as a testament to the continuous
            innovation within the web development community. By combining the
            strengths of React.js with features like Server-Side Rendering, file
            system-based routing, and automatic code splitting, Next.js empowers
            developers to build high-performance web applications with
            efficiency and ease. As the framework continues to evolve and adapt
            to the ever-changing demands of the digital landscape, it solidifies
            its position as a cornerstone in the modern web development toolkit.
          </p>
        </section>
        </div>
        <div className='col-span-1 '>
        <nav className="flex flex-col bg-slate-100 fixed top-0 left-0'">
          <Link href="#rise-of-next-js">The Rise of Next.js</Link>
          <Link href="#revolutionizing-performance">
            Revolutionizing Performance
          </Link>
          <Link href="#file-system-routing">File System-Based Routing</Link>
          <Link href="#code-splitting">Automatic Code Splitting</Link>
          <Link href="#seamless-deployment">Seamless Deployment</Link>
          <Link href="#conclusion">Conclusion</Link>
        </nav>
      </div>
    </div>
  );
};

export default Webpage;
