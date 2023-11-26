import Link from 'next/link';
import Webpage from '../Webpage';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = ['intro', 'conclusion'];
  return (
    <html lang="en">
      <body className="flex">
       
        <div>
        <div className="bg-slate-400">
          <nav className='flex gap-4'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Home</Link>
          </nav>
        </div>
        
        <div className="grid grid-cols-4">
        
          <div className="gap-4 col-span-1 ">
            <div className="flex flex-col fixed top-10">
              {tabs.map((tab) => {
                return <Link href={`/doc/${tab}`}>{tab.toUpperCase()}</Link>;
              })}
            </div>
          </div>
          <div className="col-span-3">{children}</div>
        </div>
        </div>
      </body>
    </html>
  );
}
