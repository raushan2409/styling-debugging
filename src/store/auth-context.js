import React, { useState,useEffect } from "react";
// React.createContext() takes a default context and context here really is just your app or component wise state so it's up to u what should the state should be it could be simple like a string 'my string' often though it will we the object
// here  AuthContext is a object that'will contain a component
//we have to wrap

const AuthContext = React.createContext({ 
    isLoggedIn: false ,
    onLogout:()=>{},
    onLogin: (email,password) => {}
});


export const AuthContextProvider = (props)=>{
const [isLoggedIn,setIsLoggedIn]  = useState(false);


useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

const logoutHandler = ()=>{
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
}
const loginHandler = ()=>{
    localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
}


    return <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler,onLogin:loginHandler}} >{props.children}</AuthContext.Provider>
  }
  

export default AuthContext;
