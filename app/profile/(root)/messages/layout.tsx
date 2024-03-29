 
 
 
import SideBar from "@/components/sidebar/SideBar";
 
 
import getConversations from "@/app/actions/getConversations";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsers from "@/app/actions/getUsers";
import ConversationList from "./components/ConversationList";
 

export default async function ConversationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  const currentUser = await getCurrentUser()

  return (
   
    <>
    
   
      <div className="h-full flex">
      <ConversationList 
          users={users} 
           
          initialItems={conversations}
        />
        {children}
      </div>
    
    </>
  );
}