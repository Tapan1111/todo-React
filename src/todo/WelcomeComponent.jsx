import { useParams, Link } from 'react-router-dom';

export default function WelcomeComponent(){
    const {username} = useParams();

    
    return(
        <div className='WelcomeComponent'>
                <h1>Welcome To Todos{username} </h1>
            <div>
                Manage Your Todos - <Link to="/Todo">go here</Link>
            </div>
        </div>
    )
}