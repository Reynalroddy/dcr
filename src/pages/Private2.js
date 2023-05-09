import React,{useRef,useState,useEffect} from 'react'
import './admin.css';

import naija from "../assets/images/ci.svg"

import {Tooltip,} from "recharts";
  import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";
import { Link } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { FilterMatchMode } from 'primereact/api';
import { useDispatch, useSelector } from "react-redux";
import {getAttestRegz} from "../redux/apiCalls"
import authFetch from '../axios';
import Filter from '../components/Filter';
// import jsPDF from 'jspdf';
// import { Tooltip } from 'primereact/tooltip';
const Private2 = () => {
// const lineRef= useRef(null);
const dispatch = useDispatch();
// const [loading1, setLoading1] = useState(true);
// const [filters1, setFilters1] = useState(null);
// const [globalFilterValue1, setGlobalFilterValue1] = useState('');
const [rez, setRez] = useState({});
const {
  isLoading,
  search,
  result_per_page,
  page,
  type,
  registerations,
} = useSelector((state) => state.attest);
useEffect(() => {
  
  const getStatz=async()=>{
  
      try {
          const statistics = await authFetch.get('https://npc-api.dsaved.com/v0/state-director/birth-attestation/stats');
  console.log(statistics.data);
  setRez(statistics.data);
      } catch (error) {
          console.log(error)
      }
  }
  
  getStatz();
       
  }, [])
useEffect(() => {
         getAttestRegz(dispatch, search,
          result_per_page,
          page,
          type
         )

}, [dispatch,search,
  result_per_page,
  page,
  type]); // eslint-disable-line react-hooks/exhaustive-deps




const statusBodyTemplate2 = (rowData) => {
  return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single/${rowData.id}`} >
VIEW 
  </Link>
}

const renderHeader1 = () => {
  return (
     <Filter/>
  )
}
const header1 = renderHeader1();
const dt = useRef(null);


  

    
    
  return (
    <>
    <div className="grid my-3">
    <div className="col-12 " style={{backgroundColor:'#10A6AB'}}>
        <p className='text-white m-0 text-sm font-bold'>Total Registrations:{rez?.total}</p>
        </div>
         <div className="col-12 md:col-6 lg:col-4">
        <div className=" shadow-2 p-3 border-round text-white" style={{background:'#2F96FB'}}>
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Pending Approvals</span>
                        <div className=" font-bold text-xl">{rez?.Pending}</div>
                      
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                        
                    </div>
                </div>
                
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4" >
            <div className=" shadow-2 p-3 border-round text-white" style={{background:'#FEA93B'}}>
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Approved Registrations</span>
                        <div className=" font-bold text-xl"> {rez?.Approved}</div>
                    
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                        
                    </div>
                </div>
               
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
        <div className="shadow-2 p-3 border-round text-white" style={{background:'#0D5094'}}>
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Printed Certificates</span>
                        <div className=" font-bold text-xl">{rez?.Printed}</div>
                       
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                       
                    </div>
                </div>
                
            </div>
        </div>
      
      



            {/* <div className="col-12 md:col-6 lg:col-7 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Gender Registration Statistics</div>
                     
                    </div>

                    <Chart type="bar" data={bar3Data} options ={stackedOptions} width="100%" height={'150px'} />
                    <div className='flex  justify-content-between'>
                    <div className='flex gap-2'>
                    <img src={male} className='' style={{width:'9px'}} alt=''/>
                    <p className='text-sm'>Male</p>
                    </div>

                    <div className='flex gap-2 '>
                    <img src={female} className='' style={{width:'14px'}} alt=''/>
                    <p className='text-sm'>Female</p>
                    </div>


                </div>
                </div>

               
            </div>


            <div className="col-12 md:col-6 lg:col-5 py-4"> 
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        
                       
                    </div>
                     <div className='flex gap-2 flex-column align-items-center '>
                     <div className="text-900  text-sm font-medium text-center">Top 3 States in Birth Registration</div>
                    <div className='flex flex-column md:flex-row gap-3  '>
                    <div className='flex gap-2 flex-column'>
<img  src={round} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1 text-sm'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={round} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={round} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>

                    </div>
                    <Divider layout="" />

                    <div className="hidden text-900 text-sm font-medium md:block">Top 3 States in Death Registration</div>
                    <div className='flex gap-3 justify-content-center '>
                    <div className='flex gap-2 flex-column'>
                        
<img  src={rect} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1 text-sm'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={rect} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>
<div className='flex gap-2 flex-column'>
<img  src={rect} style={{width:'3rem',height:'3rem'}} alt='' />
<span className='text-sm font-medium '>Kano <span className='border-1 border-blue-500 px-1'>78.3</span></span>
</div>

                    </div>
                    </div> 
                    
                    
                </div>
            </div> */}
           

            {/* <div className=" hidden md:block col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3" >
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics of Death Registration by Age</div>
                     
                    </div>

                    <div style={{ width:'100%' }}>
                    <ResponsiveContainer width='100%' height={250}>
      <BarChart data={bar2Data} 
    //   margin={{ top: 50 }}
    width={350}
      >
       
        <XAxis dataKey="name" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >   
          <stop offset="0" stopColor="#15612B" />
          <stop offset="1" stopColor="#4BD024" />
        </linearGradient>
      </defs>
        <Bar dataKey="uv" fill="url(#colorUv)" barSize={30} radius={[15, 15, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
                </div>
            </div> */}

            {/* <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Major Causes of Death Stats</div>
                      
                    </div>

                    <Chart type="doughnut" data={doughnut} style={{  width: '50%',margin:'0 auto' }}  />

                 
                </div>
            </div> */}
         
         

         {/* <div className='grid mt-2'> */}
     <div className="col-12 lg:col-12 mt-2">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Pending Approvals</span>
        {/* <div className="flex align-items-center export-buttons">
           
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
           
        </div> */}
       
    </div>
             <DataTable value={registerations} 
             ref={dt}
                 
                    loading={isLoading}
                    stripedRows
                     responsiveLayout="scroll"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                       
                        <Column field="firstname" header="firstname"></Column>
                            <Column field="surname" header="surname "></Column>
                            <Column field="attestation_number" header="Certificate number"></Column>
                            <Column field="date_created" header="Date created"></Column>
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                </div>
            </div>
            
           
</div> 
          


               
           

    {/* </div> */}
    </>
  )
}

export default Private2;