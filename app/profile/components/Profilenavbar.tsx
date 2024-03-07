import getCurrentUser from "@/app/actions/getCurrentUser";
import Profile from "./Profile";
 

 

async function Profilenavbar ({children}:{
  children:React.ReactNode;
}){
  const currentUser = await getCurrentUser();
  return(
    <div className="h-full ">
       
      <Profile currentUser={currentUser!}/>
      <main className="  h-full">
      {children}
      </main>
      
    </div>
  )
}
export default Profilenavbar;


