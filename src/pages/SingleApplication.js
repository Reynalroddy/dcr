import React,{useEffect,useState,useRef} from 'react'
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { ProgressSpinner } from 'primereact/progressspinner';
import { getRegs } from '../redux/apiCalls';
import { editz } from '../redux/apiCalls';
import authFetch from '../axios';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import './admin.css';
const SingleApplication = () => {
  const {id}=useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');
  // eslint-disable-next-line
  const [loading,setLoading]= useState(false);
const [visible2, setVisible2] = useState(false);
const toast = useRef()
const  [img,setImg] = useState('')
  const {
        isLoading,
      reg ,isEditing,isEdited
      } = useSelector((state) => state.attest);
      const ed = (id)=>{
        editz(id,dispatch)
      }


      const viewBirth=async()=>{
        // /cert/birth/${reg?.Certificate_No}
        setLoading(true)
    try {
        console.log(reg?.attestation_number);
        const res = await authFetch.get(`/cert/attestation/${reg?.attestation_number}`);
        console.log(res.data);
        setLoading(false)
        setImg(res.data);
        setVisible2(true)
    } catch (error) {
        setLoading(false)
        console.log(error);
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
    }
    
    
      }

      const print=async()=>{
        // /cert/birth/${reg?.Certificate_No}
        setLoading(true)
    try {
        console.log(reg?.attestation_number);
        const res = await authFetch.patch(`/state-director/birth-attestation/print/${reg?.id}`);
        console.log(res);
        setLoading(false)
       if(res.data.success === true){
        window.print();
       }
       else{
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${res.data.message}` });
       }
    } catch (error) {
        setLoading(false)
        // console.log(error);
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
    }
    
    
      }

      const share=async()=>{
        // /cert/birth/${reg?.Certificate_No}
        setLoading(true)
    try {
        console.log(reg?.attestation_number);
        const res = await authFetch.post(`/cert/share`,{

        });
        console.log(res.data);
        setLoading(false)
        setImg(res.data);
        setVisible2(true)
    } catch (error) {
        setLoading(false)
        console.log(error);
        toast.current.show({ severity: 'error', summary: 'Error', detail: `${error.response.data.message}` });
    }
      }

      const app=async(id)=>{
        if(!value){
          alert('please input a reason');
          return;
              }
        try {
            const res = await authFetch.get(`dcr/registrations/death/reject`,{
                
              id: parseInt(id),
              reason: value
          
          });
            console.log(res.data);
            if(res.data.success === true){
                toast.success("Registration queried", {
                    position: "top-left",
                  });
            }
            else{
                toast.success("Registration not queried", {
                    position: "top-left",
                  });
            }
        
          } catch (error) {
           
            toast.error("Registration not queried.retry", {
              position: "top-left",
            });
          console.log(error)
          }
      }
    useEffect(() => {
    getRegs(dispatch,id)
    // console.log(reg)
    }, [dispatch,id,isEdited])
    
    if(isLoading){
    return <div className='flex justify-content-center align-items-center'>
    <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
    </div>
    }
  return (
    <div> 

<div className="surface-card p-4 shadow-2 border-round">

<div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of Applicant</div>
  <div className='flex flex-column lg:flex-row flex-wrap lg:justify-content-between border-bottom-3 border-green-500 gap-3'>
    <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">National Identification Number *</div>
    <div className="text-900 text-md mb-5 ">{reg&&reg.nin}</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">Status</div>
    <div className="text-900 text-md mb-5 ">{reg &&reg.approval_status===0?'pending':reg &&reg.approval_status===1?'Approved':reg &&reg.approval_status===2?'Queried':''}</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">Surname Of Applicant *</div>
    <div className="text-900 text-md mb-5 ">{reg&&reg.surname}</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">Firstname</div>
    <div className="text-900 text-md mb-5 ">{reg&&reg.firstname}</div>
  </div>

  <div className='flex flex-column'>
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
  </div>

  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">email</div>
    <div className="text-900 text-md mb-5 ">{reg&&reg.applicant_email}</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">phone number</div>
    <div className="text-900 text-md mb-5 ">{reg&&reg.applicant_phone}</div>
  </div>
  
  
    </div>

  </div>
<div className="surface-card p-4 shadow-2 border-round my-2">

   



        <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Additional Information</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Place Of Birth *</div>
            <div className="text-900">{reg&&reg.place_of_birthData?.BirthPlace_Desc}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">State (Place Of Birth) *</div>
            <div className="text-900">{reg&&reg.state_of_birthData?.State_Name}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Local Government Area (Place Of Birth) *</div>
            <div className="text-900">{reg&&reg.lga_of_birthData?.LGA_Name}</div>
            
            
        </div>
      
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">requester_name</div>
           
            <div className="text-900">{reg&&reg.requester_name}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">requester_address</div>
           
            <div className="text-900">{reg&&reg.requester_address}</div>
           
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Type of birth</div>
            <div className="text-900">{reg&&reg.Birth_typeData?.Description}</div>
           
        </div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">request_required_for</div>
            <div className="text-900">{reg&&reg.request_required_for}</div>
           
        </div>
      
       
       
    </div>

    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of Mother</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.mother_surname} {reg&&reg.mother_firstname}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Town</div>
            <div className="text-900">{reg&&reg.mother_town}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
      
      
     
       

      
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
            <div className="text-900">{reg&&reg.mother_stateData?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">lga</div>
            <div className="text-900">{reg&&reg.mother_lgaData?.LGA_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>

        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">OCCUPATION</div>
            <div className="text-900">{reg&&reg.Mother?.OccupationData?}</div>
            
        </div> */}
      
       
       
    </div>
    <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of father</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.father_surname} {reg&&reg.father_firstname}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Town</div>
            <div className="text-900">{reg&&reg.father_town}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
      
      
     
       

      
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">STATE OF ORIGIN</div>
            <div className="text-900">{reg&&reg.father_stateData?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       

        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">lga</div>
            <div className="text-900">{reg&&reg.father_lgaData?.LGA_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
      
       
       
    </div>
    {/* <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
          <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{reg&&reg.Informant?.informant_names}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone</div>
            <div className="text-900">{reg&&reg.Informant?.Phone_No}</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">NATIONAL ID NUMBER</div>
            <div className="text-900">{reg&&reg.Informant?.NIN}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">{reg&&reg.Informant?.Address}</div>
            
        </div>
       
    </div> */}
      <Toast ref={toast} />
    {reg &&reg.approval_status===0&&
    <Button label="Approve" className="p-button-success my-2" loading={isEditing} onClick={()=>ed(id)} />
}

{reg &&reg.approval_status===1&&
    <Button label="View certificate" className="p-button-success my-2" onClick={viewBirth}  />
}


{/* {reg &&reg.approval_status===1&&
    <Button label="Print certificate" className="p-button-success my-2"  />
} */}

{/* {reg &&reg.approval_status===1&&
    <Button label="Share certificate" className="p-button-success my-2"  />
} */}

{(reg?.approval_status===0 || reg?.approval_status===1) &&
<Button label="Query" className="p-button-warning my-2 ml-3"  onClick={()=>setVisible(true)} />
}
</div>
<Dialog header="Query" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
    <div className="card flex justify-content-center">
            <InputTextarea value={value} placeholder='reason for query' onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
        <Button label="Submit" className="p-button-warning my-2 px-3 ml-3" onClick={()=>app(id)} />
            </Dialog>

            <Dialog header="Certificate" visible={visible2} style={{ width: '70vw' }} onHide={() => setVisible(false)}>
                <img  src={`data:image/png;base64,${img} `} className='w-full to-print' alt=''/>
                <Button label="Share certificate" className="p-button-success my-2" onClick={share}  />
                <Button label="Print certificate" className="p-button-success my-2" onClick={print}  />
            </Dialog>
            
    </div>
  )
}

export default SingleApplication