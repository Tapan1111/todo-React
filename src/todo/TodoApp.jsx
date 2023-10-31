import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent'
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent';
import TodoComponent from './TodoComponent';
import ErrorComponent from './ErrorComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom';

function AuthenticatedRoutes({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children

    return(
        <Navigate to="/" />
    )
}

export default function TodoApp(){
    return(
        <div className="AppComponent">
        <AuthProvider>
        <BrowserRouter>
        <HeaderComponent/>
            <Routes>
            <Route path='/' element={ <LoginComponent/> }></Route>
            <Route path='/Login' element={ <LoginComponent/> }></Route>
            <Route path='/Welcome/:username' element={ 
                <AuthenticatedRoutes>     
                   <WelcomeComponent/>
                </AuthenticatedRoutes>     
                   }>
            </Route>
            <Route path='/Todo' element={ 
                <AuthenticatedRoutes>  
                     <TodoComponent/>
                </AuthenticatedRoutes>
             }>
            </Route>
            <Route path='/Logout' element={ 
                <AuthenticatedRoutes> 
                     <LogoutComponent/>
                 </AuthenticatedRoutes> 
            }>
            </Route>
            <Route path='*' element={ <ErrorComponent/> }></Route>
            </Routes>
            <FooterComponent/> 
        </BrowserRouter>  
        </AuthProvider>   
    </div>
    )
}