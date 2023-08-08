import React,{useState} from "react";
export const AppContext=React.createContext();

function AppContextProvider({children}) {
 
    const [set,isSet] =useState(false);
    const [isAuth,setIsAuth] =useState(false);
    const [token,setToken]=useState(null)
  
  
  const change=()=>{
      
     isSet(!set)
  }

  const loginUser=(token)=>{
    setToken(token);
    setIsAuth(true)
   
}

const logoutUser=()=>{
    setToken(null);
    setIsAuth(false)
}

  
  
  return (
      <AppContext.Provider value={{isSet,set,change,isAuth,token,loginUser,logoutUser}}>{children}</AppContext.Provider>
  )
  }
export default AppContextProvider;