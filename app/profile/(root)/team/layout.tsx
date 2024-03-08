import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsers from "@/app/actions/getUsers";
import { FlowbiteNavBar, Footer } from "@/components";
import DesktopSideBar from "@/components/sidebar/DesktopSideBar";
import SideBar from "@/components/sidebar/SideBar";
import UserList from "./components/UserList";
 


export default async function UsersLayout ({
    children
}: {
    children:React.ReactNode;
}){
    const users = await getUsers();
    const currentUser = await getCurrentUser()
    return(
        
          <>
         
        
            <div className="h-full flex">
                
               
             <UserList items={users}/>
               
                {children}
               
            </div>
         
        </>
    )
}