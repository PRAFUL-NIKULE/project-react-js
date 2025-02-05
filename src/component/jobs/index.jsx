import { useEffect, useState } from 'react';
import Header from '../header';
import Cookies from 'js-cookie';
import FilterSection from '../filterSection';
import DisplayAllJobs from '../displayAllJobs';
import './index.css';


const Jobs = ()=> {

    const [allValues,setValues] = useState({
        jobsList : []
   });

    const token = Cookies.get("jwtToken");



    useEffect( ()=>{

        const fetchAllJobs= async()=>{

            const api = "https://apis.ccbp.in/jobs";

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try{
                const response = await fetch(api,options);

                const data = await response.json();

                if( response.ok === true ){
                    setValues({...allValues,jobsList : data.jobs })
                }
                
            } catch (error) {
                console.log(error);
            }

        }

        fetchAllJobs();

    },[] );


    const onSearchUserIn = (e)=>{
        if (e.key === "Enter"){
            
        }
    }
   

    return (
        <div className="job-cont">
            <Header/>

           <div className="filter-alljobs-cont">

              <div className="filter-sec">
                  <FilterSection/>
              </div>

              <div style={{width : "60%"}}>
                <input onKeyUp={onSearchUserIn} type="search" className="form-control w-75 text-dark mt-3 ml-4" />

              <ul className="alljobs-sec">
                  {
                     allValues.jobsList.map( each => <DisplayAllJobs key={each.id} jobsItem = {each}/>)
                  }
              </ul>
              </div>

           </div>

           
            
            
        </div>
    )

}

export default Jobs;