
import './LoginComponent.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './security/AuthContext';

export default function LoginComponent(){

    const [username,setUsername] = useState('eleven11');
    const [password,setPassword] = useState('');
    const [showSuccessMessage,setshowSuccessMessage]=useState(false);
    const [showErrorMessage,setshowErrorMessage]=useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();
    


    function handleUsernameChange(event){
        
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        
        setPassword(event.target.value);
    }
    
    function successAuthentication(){
        if(authContext.login(username,password)){
            setshowSuccessMessage(true);
            setshowErrorMessage(false);
            navigate(`/Welcome/${username}`);
            
            
        }
        else{
            setshowErrorMessage(true)
            setshowSuccessMessage(false);
        }
    }

    return(
        <div className="LoginComponent">
            {showSuccessMessage &&  <div className='SuccessMessage'>Authentication Verified Successfully !!..</div>}
            {showErrorMessage && <div className='ErrorMessage'>Authentication Verification Failed !!.. Check Password and UserName</div>}           
            <div className="LoginForm">
            <div className="userName">
                <label htmlFor="" className="userNameLabel">User Name</label>
                <input type="text" name="username" id="userInput" value={username} onChange={handleUsernameChange}/>
            </div>
            <div className="password">
                <label htmlFor="" className="userNameLabel">Password</label>
                <input type="password" name="password" id="passwordInput" value={password} onChange={handlePasswordChange}/>
            </div>
            <button className="loginButton" onClick={successAuthentication}>Login</button>
            </div>
        </div>
    )
}





  

