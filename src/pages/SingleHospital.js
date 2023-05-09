import React, {  useState } from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
const SingleHospital = () => {

    const cities = [
        { name: 'Birth Registrations', code: 'NY' },
        { name: 'Death Registrations', code: 'RM' },
        { name: 'Birth Registrations & Death Registrations', code: 'LDN' },
        
    ];
  // const guy=[1,2]
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [selectedCity1, setSelectedCity1] = useState(null);
//   const[city,setCity] = useState();
  const onCityChange = (e) => {
    setSelectedCity1(e.value);
}
      const dialogFuncMap = {
         
          'displayBasic2': setDisplayBasic2,
         
      }
  
      const onClick = (name, position) => {
          dialogFuncMap[`${name}`](true);
  
         
      }
  
  
      const onHide = (name) => {
          dialogFuncMap[`${name}`](false);
      }
  
      const renderFooter = (name) => {
          return (
              <div className='flex justify-content-between'>
                  <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                  <Button label="Approve" icon="pi pi-check" onClick={() => onHide(name)} className="p-button-success" />
                 
              </div>
          );
      }
  return (
    <div>
{/* <div className="surface-card p-4 shadow-2 border-round">
  <div className='flex flex-column lg:flex-row lg:justify-content-between border-bottom-3 border-green-500'>
    <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">BIRTH CERTIFICATE NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">A18 - 43256432</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">BIRTH REGISTRATION VOLUME</div>
    <div className="text-900 text-xl mb-5 font-bold">H</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">ENTRY NUMBER</div>
    <div className="text-900 text-xl mb-5 font-bold">6432</div>
  </div>
  <div className='flex flex-column'>
    <div className="font-medium text-md text-500 mb-3">DATE OF REGISTRATION</div>
    <div className="text-900 text-xl mb-5 font-bold">10/12/2022</div>
  </div>
    </div>

  </div> */}
<div className="surface-card p-4 shadow-2 border-round my-2">

   
    {/* <div className="grid grid-nogutter  pt-2">
        <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">REGISTRATION CENTRE</div>
            <div className="text-900">FMC</div>
        </div>
        <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">VILLAGE/TOWN</div>
            <div className="text-900">Demsa</div>
        </div>
        <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">LOCAL GOVERNMENT AREA</div>
            <div className="text-900">Demsa</div>
        </div>
        <div className="col-12 md:col-3 p-3">
            <div className="text-500 font-medium mb-2">STATE</div>
            <div className="text-900">Delta</div>
        </div>
        </div> */}


        <div className="flex flex-column md:flex-row md:flex-wrap pt-2 border-top-1 border-bottom-1 border-green-300">
          {/* <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of child</div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">CAC Number</div>
            <div className="text-900">Delta</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Hospital Name</div>
            <div className="text-900">09/11/2020</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Hospital Type</div>
            <div className="text-900">male</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Hospital Category</div>
            <div className="text-900">Hospital</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Contact Person's Phone Number</div>
            <div className="text-900">Dubai</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Contact Person's Email Address</div>
            <div className="text-900">single</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Address</div>
            <div className="text-900">First Born</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
      
       
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">State</div>
            <div className="text-900">Delta</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">LGA</div>
            <div className="text-900">Delta</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Locality</div>
            <div className="text-900">Delta</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
       
    </div>

   
    {/* <div className="grid grid-nogutter pt-2 border-top-1 border-bottom-1 border-green-300">
          <div className='col-12 p-3 uppercase border-bottom-1 border-green-300 text-md font-bold '>Particulars of informant</div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
          
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
           
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">Delta</div>
            
        </div>
      
       
       
    </div> */}
    <div className='flex gap-3 flex-column md:flex-row'>

    <Button label="Approve" className="p-button-success my-2"onClick={() => onClick('displayBasic2')} />
    <Button label="Decline" className="p-button-warning my-2" />
    <Button label="Close" className="p-button-danger my-2" />
    </div>
  
</div>
<Dialog header="Assign Role" visible={displayBasic2} style={{ width: '30vw',color:'#565656' }} breakpoints={{'960px': '95vw'}} footer={renderFooter('displayBasic2')} onHide={() => onHide('displayBasic2')}>
                <div className="flex">  
                <div className='w-full px-4'>
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} style={{width:'100%'}} optionLabel="name" placeholder="Select Role" />
            

                </div>
                   {/* <div className='w-2'>
                   <div className="flex relative align-items-center justify-content-center mx-1 py-3 min-h-full">
            <div className="border-left-1 border-300 top-0 left-50 absolute h-full"></div>
            <div className="py-2 z-1 surface-0">
                <span className="text-900 font-medium">OR</span>
            </div>
                    </div>
                   </div> */}
                 
                   

                    {/* <div className='w-5'>
                    <div className="field mb-4 col-12 md:col-6">
                    <div className="text-sm text-900 mb-2">Employee Tax ID</div>
            <label htmlFor="company_name" className="text-sm text-900 ">Input employee Tax Id to continue</label>
            <InputText id="company_name" type="text" className='' placeholder='Input employee Tax Id' />
        </div>
        <Button label="Continue" className="w-8 mb-7 md:mb-0"  />
    </div> */}
   </div>
                </Dialog>
    </div>
  )
}

export default SingleHospital