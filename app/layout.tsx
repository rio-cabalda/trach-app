import type { Metadata } from 'next'

import './globals.css'
 
import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';
import ActiveStatus from '@/components/ActiveStatus';



export const metadata: Metadata = {
  title: 'Trach App',
  description: 'Real Estate Comparison Hub',
  icons:{
    icon:'/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <AuthContext>
    <html lang="en">
     
      <body className='flex h-screen flex-col'>
        <ToasterContext/>
        <ActiveStatus/>
      
        {children}
       
        </body>
    </html>
    </AuthContext>
    
  )
}
