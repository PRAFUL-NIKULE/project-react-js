import { Link } from 'react-router-dom';
import './index.css'

const Header = ()=> {



    return (

        <nav className="my-nav">
             <Link to="/">
                 <img src="src\assets\logo-5-removebg-preview.png" className="my-logo"/>
             </Link>
            
            <ul className="ul-cont">
               
                <li>
                    <Link to = "/" className="nav-item">Home</Link>
                </li>
                <li>
                    <Link to = "/jobs" className="nav-item">Jobs</Link>
                </li>

            </ul>

                <button className="btn btn-info">Logout</button>

            

        </nav>
        
    )
}


export default Header;      




