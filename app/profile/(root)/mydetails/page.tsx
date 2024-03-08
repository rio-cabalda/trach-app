import React from 'react'
import Details from './components/Details'
import getCurrentUser from "@/app/actions/getCurrentUser";


async function page  ({children}:{
  children:React.ReactNode;
}){
  const currentUser = await getCurrentUser();
  return (
    <div><Details currentUser={currentUser!}/></div>
  )
}

export default page