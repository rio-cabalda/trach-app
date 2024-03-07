import React from 'react'
 
import { FlowbiteNavBar, Footer } from '@/components'
import getCurrentUser from "../actions/getCurrentUser";
import Profile from './components/Profile';
import SettingsProfile from './components/SettingsProfile';
 

export default async function page({
    children
}:{
    children:React.ReactNode,
})   {
    const currentUser = await getCurrentUser()
  return (
    
    <div className="space-y-12 bg-white  h-full  mx-5 overflow-hidden rounded-t-lg ">
            
       
          {children}
        
           <Footer/>
    </div>
  )
}

 