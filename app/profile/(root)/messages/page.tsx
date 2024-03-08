 

import clsx from "clsx";

 
 
import useConversation from "@/app/hooks/useConversation";
import ConversationList from "./components/ConversationList";
import getConversations from "@/app/actions/getConversations";
import getUsers from "@/app/actions/getUsers";
import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState2 from "../../components/EmptyState2";

export default async function Home ({
  children
}: {
  children: React.ReactNode,
}) {
  const conversations = await getConversations();
  const users = await getUsers();
  const currentUser = await getCurrentUser()
 

  return (
    <div >
     
      <EmptyState2 />
    </div>
  )
}

 