import { FlowbiteNavBar, Footer } from "@/components";
import getCurrentUser from "../actions/getCurrentUser";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser()
  return (
   
    <div className="relative bg-white">  
     <FlowbiteNavBar currentUser={currentUser!}/> 
          
      <main  className="flex-1">{children}</main>
      <Footer/>
    </div>
      
   
  );
}
