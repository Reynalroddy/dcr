import React,{useEffect,useState} from 'react'
import { Button } from 'primereact/button';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { ProgressSpinner } from 'primereact/progressspinner';
import { getSingleBirthRegs } from '../redux/apiCalls';
import { editBirthReg } from '../redux/apiCalls';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
// import { Alert } from 'react-bootstrap';
import { toast } from "react-toastify";
import authFetch from '../axios';
const SingleBirth = () => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  const {
    isLoading,
  reg ,isEdited
  } = useSelector((state) => state.birth);
  const ed = (id)=>{
    if(!value){
alert('please input a value');

    }
    else{
    editBirthReg(id,value,dispatch)
    }
  }

  const app=async(id)=>{
    try {
        const res = await authFetch.get(`dcr/registrations/birth/approve/${parseInt(id)}`);
        console.log(res.data);
        if(res.data.success === true){
            toast.success("Registration approved", {
                position: "top-left",
              });
        }
        else{
            toast.success("Registration not approved", {
                position: "top-left",
              });
        }
    
      } catch (error) {
       
        toast.error("Registration not approved.retry", {
          position: "top-left",
        });
      console.log(error)
      }
  }
    useEffect(() => {
        getSingleBirthRegs(dispatch,id)
    // console.log(reg)
    }, [dispatch,id,isEdited])
    
    console.log(reg.Approval_Status)
    if(isLoading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }
  return (
    <div> 

<div className="surface-card p-4 shadow-2 border-round">
  <div className='flex flex-column lg:flex-row lg:justify-content-between border-bottom-3 border-green-500'>
    <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">BIRTH CERTIFICATE NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.Certificate_No}</div>
  </div>
  {/* <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">BIRTH REGISTRATION VOLUME</div>
    <div className="text-900 text-xl mb-5 font-bold">H</div>
  </div> */}
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">Status</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg?.Approval_Status === 0 ?'pending':reg?.Approval_Status === 1 ?'approved':reg?.Approval_Status === 2?'queried':'' }</div>
  </div>

  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">DATE OF REGISTRATION</div>
    <div className="text-900 text-xl mb-5 font-bold">{reg&&reg.Date_Registerred}</div>
  </div>
    </div>

  </div>
<div className="surface-card p-4 shadow-2 border-round my-2">

   
    <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">REGISTRATION CENTRE</div>
            <div className="text-900">{reg&&reg.Reg_CenterData?.Reg_Center_Name}</div>
            
        </div>
        {/* <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">VILLAGE/TOWN</div>
            <div className="text-900">Demsa</div>
        </div> */}
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
            
            <div className="text-900">{reg&&reg.LGA_of_OriginData?.LGA_Name}</div>
        </div>
        <div className="col-12 md:col-4 p-3">
            <div className="text-500 font-medium mb-2">STATE</div>
           
            
            <div className="text-900"> {reg&&reg.LGA_of_BirthData?.states.State_Name}</div>
        </div>
        </div>


        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of child</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.FirstName} {reg&&reg.MiddleName} {reg&&reg.SurName}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">D0B</div>
            <div className="text-900">{reg&&reg.Date_Of_Birth}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Gender</div>
            <div className="text-900">{reg&&reg.GenderData?.gender}</div>
            
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Place of birth</div>
            <div className="text-900">{reg&&reg.Birth_PlaceData?.BirthPlace_Desc}</div>
           
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
           
            <div className="text-900">{reg&&reg.LGA_of_OriginData?.LGA_Name}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Type of birth</div>
            <div className="text-900">{reg&&reg.Birth_typeData?.Description}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Birth order</div>
            
            <div className="text-900">{reg&&reg.Birth_OrderData?.Desc}</div>
           
        </div>
      
       
       
    </div>

    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of mother</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.mother?.FirstName} {reg&&reg.mother?.SurName}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.mother?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.mother?.NIN}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.mother?.Address}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">AGE OF BIRTH</div>
            
            <div className="text-900">{reg&&reg.mother?.mother_age_at_birth}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Marital Status</div>
            <div className="text-900">{reg&&reg.mother?.Marital_StatusData?.Status_Desc}</div>
            
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">ETHNIC ORIGIN</div>
            <div className="text-900">{reg&&reg.mother?.Ethnic_GroupData?.Ethnic_Grp_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONALITY</div>
            <div className="text-900">{reg&&reg.mother?.Country_of_OriginData?.Country_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
            <div className="text-900">{reg&&reg.mother?.State_of_OriginData?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
            <div className="text-900">{reg&&reg.mother?.Literacy_LevelData?.Literacy}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
            <div className="text-900">{reg&&reg.mother?.EducationData?.Description}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">OCCUPATION</div>
            <div className="text-900">{reg&&reg.mother?.OccupationData?}</div>
            
        </div> */}
      
       
       
    </div>
    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of father</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.father?.FirstName} {reg&&reg.father?.SurName}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.father?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.father?.NIN}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.father?.Address}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">AGE OF BIRTH</div>
            
            <div className="text-900">{reg&&reg.father?.father_age_at_birth}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Marital Status</div>
            <div className="text-900">{reg&&reg.father?.Marital_StatusData?.Status_Desc}</div>
            
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">ETHNIC ORIGIN</div>
            <div className="text-900">{reg&&reg.father?.Ethnic_GroupData?.Ethnic_Grp_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONALITY</div>
            <div className="text-900">{reg&&reg.father?.Country_of_OriginData?.Country_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
            <div className="text-900">{reg&&reg.father?.State_of_OriginData?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LITERATE/ILLITERATE</div>
            <div className="text-900">{reg&&reg.father?.Literacy_LevelData?.Literacy}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LEVEL OF EDUCATION</div>
            <div className="text-900">{reg&&reg.father?.EducationData?.Description}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
      
       
       
    </div>
    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.informant?.informant_names}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.informant?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.informant?.NIN}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.informant?.Address}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
    </div>

  {  reg?.Approval_Status === 0 &&<Button label="Approve" className="p-button-success my-2 px-3" onClick={()=>app(id)} />}

  {  (reg?.Approval_Status === 0 || reg?.Approval_Status === 1 ) && <Button label="Query" className="p-button-warning my-2 px-3 ml-3" onClick={()=>setVisible(true)} />}
   
    <Dialog header="Query" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
    <div className="card flex justify-content-center">
            <InputTextarea value={value} placeholder='reason for query' onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
        <Button label="Submit" className="p-button-warning my-2 px-3 ml-3" onClick={()=>ed(id)} />
            </Dialog>
</div>

    </div>
  )
}

export default SingleBirth