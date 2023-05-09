
import React,{useEffect} from 'react'
import { Button } from 'primereact/button';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { getModsSingleAttestRegs } from '../redux/apiCalls';
import {  editModAttest} from '../redux/apiCalls';
const SingleModifiedAttestation = () => {
    const {id}=useParams();
    const dispatch = useDispatch();
    const {
          isLoading,
        reg ,isEditing,isEdited
        } = useSelector((state) => state.modAttest);
        const ed = (id)=>{
            editModAttest(id,dispatch)
        }
      useEffect(() => {
    getModsSingleAttestRegs(dispatch,id)
    //   console.log(reg)
      }, [dispatch,id,isEdited])
      
      if(isLoading){
      return <div className='flex justify-content-center align-items-center'>
      <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
      </div>
      }
    return (
      <div> 
  
  <div className="surface-card p-4 shadow-2 border-round">
  
  <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars </div>
    <div className='flex flex-column lg:flex-row flex-wrap lg:justify-content-between border-bottom-3 border-green-500 gap-3'>
      <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Attestation Number *</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.attestation_number}</div>
    </div>
    {/* <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Status</div>
      <div className="text-900 text-md mb-5 ">{reg &&reg.approval_status===0?'pending':reg &&reg.approval_status===1?'Approved':''}</div>
    </div> */}
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Surname</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.surname}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Firstname</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.firstname}</div>
    </div>

    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">MMiddlename</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.middlename}</div>
    </div>
  
    {/* <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Sex</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.sexData?.Gender}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Date Of Birth *</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.date_of_birth}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Marital Status *</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.marital_statusData?.Status_Desc}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Nationality *</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.country_of_birthData?.Country_Name}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">State Of Origin *</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.state_of_originData?.State_Name}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">Local Government Area Of Origin *</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.lga_of_originData?.LGA_Name}</div>
    </div> */}
  
    {/* <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">email</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.applicant_email}</div>
    </div>
    <div className='flex flex-column'>
      <div className="font-medium text-md text-500 mb-3">phone number</div>
      <div className="text-900 text-md mb-5 ">{reg&&reg.applicant_phone}</div>
    </div> */}
    
    
      </div>
  
    </div>
  <div className="surface-card p-4 shadow-2 border-round my-2">
  
  
          <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
            <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Additional Information</div>
          <div className="col-12 md:col-2 p-3">
              <div className="text-500 font-medium mb-2">Modification Type: </div>
              <div className="text-900">{reg&&reg.Modification&&reg.Modification[0]?.mod_type}</div>
             
          </div>
          <div className="col-12 md:col-2 p-3">
              <div className="text-500 font-medium mb-2">Field</div>
              <div className="text-900">{reg&&reg.Modification&&reg.Modification[0]?.mod_field}</div>
              
          </div>
          <div className="col-12 md:col-2 p-3">
              <div className="text-500 font-medium mb-2">Reason for modification:</div>
              <div className="text-900">{reg&&reg.Modification&&reg.Modification[0]?.mod_reason}</div>
               
          </div>

          <div className="col-12 md:col-2 p-3">
              <div className="text-500 font-medium mb-2">Comments:</div>
              <div className="text-900">{reg&&reg.Modification&&reg.Modification[0]?.comment}</div>
               
          </div>
        
    
        
         
         
      </div>
  
   
     
    
      {/* {reg &&reg.approval_status===0&& */}
      <Button label="Approve" className="p-button-success my-2" loading={isEditing} onClick={()=>ed(id)} />

  <Button label="Query" className="p-button-warning my-2 ml-3 text-white"  />
  </div>
  
      </div>
    )
}
     
export default SingleModifiedAttestation



