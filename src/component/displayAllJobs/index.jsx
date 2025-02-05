
import './index.css';
import { FaStar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const DisplayAllJobs = (prop)=> {

    const {jobsItem} = prop;


    return(
        <Link to={`/jobs/${jobsItem.id}`}>
        <li className="jobs-cards">
            
            <div className="title-logo-cont">
                <img className="mr-3" src={jobsItem.company_logo_url} width="70px"  />
                <div>
                    <h3>{jobsItem.title}</h3>
                    <FaStar className="mr-2 text-warning"/>
                    <span>{jobsItem.rating}</span>
                </div>
            </div>

            <div className="mt-3 d-flex justify-content-between">
                 <div>
                    <FaLocationDot className="mr-2" />
                    <span>{jobsItem.location}</span>

                    <BsBriefcaseFill className="mr-2 ml-3" />
                    <span>{jobsItem.employment_type}</span>
                 </div>

                 <h5>{jobsItem.package_per_annum}</h5>
            </div>
            <hr style={{backgroundColor : "white"}} />

            <div>
                <h5>Decription</h5>
                <p>{jobsItem.job_description}</p>
            </div>
            

        </li>
        </Link>
    )

}

export default DisplayAllJobs;

// {
//   "jobs": [
//     {
//       "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
//       "employment_type": "Full Time",
//       "id": "d6019453-f864-4a2f-8230-6a9642a59466",
//       "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
//       "location": "Bangalore",
//       "package_per_annum": "21 LPA",
//       "rating": 4,
//       "title": "Backend Engineer"
//     }