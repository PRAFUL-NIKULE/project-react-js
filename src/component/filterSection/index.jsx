import { useEffect } from 'react';
import './index.css';
import { useState } from 'react';
import Cookies from 'js-cookie';


// const EmploymentTypeList= [
//     {
//         label: 'Full Time',
//         employmentTypeId: 'FULLTIME',
//     },
//     {
//         label: 'Part Time',
//         employmentTypeId: 'PARTTIME',
//     },
//     {
//         label: 'Freelance',
//         employmentTypeId: 'FREELANCE',
//     },
//     {
//         label: 'Internship',
//         employmentTypeId: 'INTERNSHIP',
//     },
// ]

// const salaryRangesList = [
//     {
//         salaryRaingeId: '1000000',
//         label: '10 LPA and above',
//     },
//     {
//         salaryRaingeId: '2000000',
//         label: '20 LPA and above',
//     },
//     {
//         salaryRaingeId: '3000000',
//         label: '30 LPA and above',
//     },
//     {
//         salaryRaingeId: '4000000',
//         label: '40 LPA and above',
//     },
// ]


const FilterSection = (prop)=> {

 const [allValues,setValues] = useState({
    profileDetails:{}
 })
 const {empFunc} = prop;

 const token = Cookies.get("jwtToken")

 useEffect(()=>{

    const getprofileDetails = async () =>{
        const apiUrl= 'https://apis.ccbp.in/profile'
        const options = {
            headers: {
                Authorization : `Bearer ${token}`,
            },
            method: 'GET',
        }
        const response = await fetch(apiUrl,options)
        const data = await response.json()
        if (response.ok === true){
            setValues ({...allValues,profileDetails:data.profile_details})
        }
    }
    getprofileDetails();

 },[])


//  const renderEmploymentTypeList = ()=> {

//     const onChangeEmpType = (e)=>{
//        empFunc(e.target.value, e.target.checked);
//     }


//     return employmentTypeList.map(eachType =>{
//         return(
//             <li className="filter-list-item" key={eachType.employmentTypeId}>
//                 <input
//                   type="checkbox"
//                   className="checkbox-input"
//                   value={eachType.employmentTypeId}
//                   id={eachType.employmentTypeId}
//                   onChange={onChangeEmpType}
//                 />
//                 <lable htmlFor={eachType.employmentTypeId} className="filter-label">
//                     {eachType.label}
//                 </lable>
//             </li>
//         )
//     })

//  }

//  const renderEmploymentTypes = () => (
//     <>
//       <h1 className="filter-heading">Type of Employment</h1>
//       <ul className="filters-list">{renderEmploymentTypesList()}</ul>
//     </>
//   )

//   const renderSalaryRangesList = () => {

//     return salaryRangesList.map(eachRange => {


//       return (
//         <li className="fliters-list-item" key={eachRange.salaryRangeId}>
//           <input
//             type="radio"
//             className="checkbox-input"
//             value={eachRange.salaryRangeId}
//             id={eachRange.salaryRangeId}
//             name="salary ranges"
//           />
//           <label htmlFor={eachRange.salaryRangeId} className="filter-label">
//             {eachRange.label}
//           </label>
//         </li>
//       )
//     })
//   }


// const renderSalaryRangesType = () => (
//     <>
//      <h1 className="filter-heading">Salary Range</h1>
//      <ul className="filter-list">{renderSalaryRangesList()}</ul>
//     </>
// )


   const renderprofileDetails = ()=>{
    <div className="profile-details-container">
        <img src={allValues.profileDetails.profile_image_url} alt="profile" className="profile-image" />
        <h1 classNane="profile-name text-danger">{allValues.profileDetails.name}</h1>
        <p className="profile-bio text-danger">{allValues.profileDetails.short_bio}</p>
       
    </div>
   }

   return (
    <div className="filters-group-container">
        {renderprofileDetails()}
        {/* {renderEmploymentTypes()}
        <hr className="separator" />
        {renderSalaryRangesType()}  */}
    </div>
   )

}

export default FilterSection;










// "profile_details": {
//     "name": "Rahul Attuluri",
//     "profile_image_url": "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
//     "short_bio": "Lead Software Developer and AI-ML expert"


// 43, 56-137, 152-154
