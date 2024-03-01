'use server';
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import SideBar from "@/components/sidebar/SideBar";
import ConversationList from "./components/ConversationList";
import { FlowbiteNavBar } from "@/components";
import getCurrentUser from "../actions/getCurrentUser";

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
    <FlowbiteNavBar currentUser={currentUser!}/>
    <SideBar>
      <div className="h-full">
        <ConversationList 
          users={users} 
          // title="Messages" 
          initialItems={conversations}
        />
        {children}
      </div>
    </SideBar>
    </>
  );
}