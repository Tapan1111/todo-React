import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext) 

export default function AuthProvider({children}){

    const [isAuthenticated, setAuthenticated] = useState(0);

    function login(username,password){
        if(username === 'eleven11' && password === 'tapan'){
            setAuthenticated(true)
            return true
        }
        else{
            setAuthenticated(false)
            return false
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return(

        <AuthContext.Provider value={ { isAuthenticated,setAuthenticated,login,logout } }>
            {children}
        </AuthContext.Provider>
        
    )
}