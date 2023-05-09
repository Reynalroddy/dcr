import React,{useEffect,useState} from 'react'
// import { Button } from 'primereact/button';

import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
// import { getSingleBirthRegs } from '../redux/apiCalls';
// import { editBirthReg } from '../redux/apiCalls';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Dialog } from 'primereact/dialog';
// import { Alert } from 'react-bootstrap';
// import { toast } from "react-toastify";
import authFetch from '../axios';
const SingleStill = () => {
  const {id}=useParams();
//   const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [reg, setReg] = useState({});
//   const {
//     isLoading,
//   reg ,isEdited
//   } = useSelector((state) => state.birth);

useEffect(() => {
                                                                                
    const getStatz=async()=>{
        setLoading(true)
        try {
            const statistics = await authFetch.get(`/dcr/registrations/stillbirth/${id}`);
    // console.log(statistics.data);
    setLoading(false)
    setReg(statistics.data.data);
        } catch (error) {
            console.log(error)
        }
    }
    getStatz();


}, [id]); 
    // console.log(reg.Approval_Status)
    if(loading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }
  return (
    <div> 

<div className="surface-card p-4 shadow-2 border-round">
  <div className='flex flex-column lg:flex-row lg:justify-content-between border-bottom-3 border-green-500'>
    <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">Reg Center Name</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.registration_centerData?.Reg_Center_Name}</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">deceased village</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.deceased_village}</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">Status</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg?.approved_status === 0 ?'pending':reg?.approved_status === 1 ?'approved':reg?.approved_status === 2?'queried':'' }</div>
  </div>

  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">DATE OF REGISTRATION</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.deceased_date_of_delivery}</div>
  
  </div>
    </div>

  </div>
<div className="surface-card p-4 shadow-2 border-round my-2">

   
    <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">REGISTRATION CENTRE</div>
            <div className="text-900">{reg&&reg.registration_centerData?.Reg_Center_Name}</div>
            
        </div>
        {/* <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">VILLAGE/TOWN</div>
            <div className="text-900">Demsa</div>
        </div> */}
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
            
          
            <div className="text-900">{reg&&reg.birth_lgaData?.LGA_Name}</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">STATE</div>
           
            
            <div className="text-900"> {reg&&reg.birth_stateData?.State_Name}</div>
        </div>
        </div>


        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars</div>
      
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Type of birth</div>
            <div className="text-900">{reg&&reg.birth_typeData?.Description}</div>
            
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Gender</div>
            <div className="text-900">{reg&&reg.deceased_sexData?.gender}</div>
            
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Place of birth</div>
            <div className="text-900">{reg&&reg.birth_placeData?.BirthPlace_Desc}</div>
           
           
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
           
            <div className="text-900">{reg&&reg.LGA_of_OriginData?.LGA_Name}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Type of birth</div>
            <div className="text-900">{reg&&reg.Birth_typeData?.Description}</div>
           
        </div> */}
       
      
       
       
    </div>

    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of mother</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.mother_fullname}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Mother countryData</div>
            <div className="text-900">{reg&&reg.mother_countryData?.Country_Name}</div>
          
        </div>
     
       

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2 ">Nationality</div>
            <div className="text-900">{reg&&reg.mother_nationalityData?.Country_Name}</div>
           
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">state of residenceData</div>
           
            <div className="text-900">{reg&&reg.mother_state_residenceData}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
            <div className="text-900">{reg&&reg.mother?.Literacy_LevelData?.Literacy}</div>
           
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
            <div className="text-900">{reg&&reg.mother?.EducationData?.Description}</div>
           
        </div> */}

      
       
       
    </div>

    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.informant_countryData?.Country_Name}</div>
         
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">State</div>
            <div className="text-900">{reg&&reg.informant_stateData}</div>
           
        </div>
          <div className="col-12 md:col-2 p-3">
          <div className="text-500 font-medium mb-2">Relationship with motherData</div>
          <div className="text-900">{reg&&reg.informant_relationship_with_motherData?.Description}</div>
         
      </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
            <div className="text-900">{reg&&reg.informant_lgaData}</div>
           
        </div>
      
       
    </div>


</div>

    </div>
  )
}

export default SingleStill;