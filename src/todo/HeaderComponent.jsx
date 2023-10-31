import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function HeaderComponent(){

   const authContext = useAuth()

   const isAuthenticated = authContext.isAuthenticated

   console.log(authContext)

   function onLogout(){
      authContext.logout()
   }

    return(
      <header className='border-bottom border-light border-5 mb-5 p-2'>
         <div className='container'>
            <div className='row'>
                <nav className='navbar navbar-expand-lg'>
                     <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/Tapan1111">GitHub</a>
                        <div className="collapse navbar-collapse" id='LeftComponents'>
                            <ul className='navbar-nav'>
                                 <li className='nav-item'>
                                    {isAuthenticated 
                                       && <Link className='nav-link' to="/Welcome/eleven11">Home</Link>}
                                    </li>
                                 <li className='nav-item'>
                                 {isAuthenticated 
                                    && <Link className='nav-link' to="/Todo">Todos</Link>}
                                    </li>
                            </ul>
                        </div>
                        <ul className='navbar-nav'>
                           <li className='nav-item'>
                              {isAuthenticated 
                                 && <Link className='nav-link' to="/Logout"  onClick={onLogout}>Logout</Link>}
                              </li>
                           <li className='nav-item'>
                              {!isAuthenticated 
                                 && <Link className='nav-link' to="/Login">Login</Link>}  
                              </li>
                        </ul>
                </nav>
            </div>           
         </div>
      </header>
    )
  
  }