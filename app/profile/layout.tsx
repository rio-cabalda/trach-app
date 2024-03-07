'use server';
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import SideBar from "@/components/sidebar/SideBar";
 
import { FlowbiteNavBar, Footer } from "@/components";
import getCurrentUser from "../actions/getCurrentUser";
import Profilenavbar from "./components/Profilenavbar";
 

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  
  const users = await getUsers();
  const currentUser = await getCurrentUser()

  return (
   
    <>
    <FlowbiteNavBar currentUser={currentUser!}/>
    <Profilenavbar>
     
         <div className="bg-white m-5">
          
         {children}
         </div>

    </Profilenavbar>
    {/* <Footer/> */}
    </>
  );
}