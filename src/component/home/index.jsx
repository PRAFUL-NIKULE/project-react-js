import { Link } from 'react-router-dom';
import Header from '../header';
import './index.css'

const Home = ()=> {

    

    return (
        <div className="home-cont">
            <Header/>

            <div className="home-container">
               <h1 className="home-heading"> Find The Jobs That Fit Your Life 
               </h1>
               <br />
               <p className="home-para">Millions of people are searching for jobs,salary<br />
                  information,company reviews. Find the jobs that Fits<br />
                  your abilities and potential. 
               </p>
               <br />
               <Link to="/jobs">
                 <button className="btn btn-info">Find Jobs</button>
               </Link>
            </div>
            
        </div>
    )

}

export default Home;