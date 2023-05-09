import React,{useState,useEffect} from 'react'
// import { Chart } from 'primereact/chart';
import './admin.css';
import male from "../assets/images/man.svg"
import female from "../assets/images/woman.svg"
import { Dialog } from 'primereact/dialog';

import SexBar from '../components/SexBar';
import BirthOccurence from '../components/BirthOccurence';
import MotherAge from '../components/MotherAge';
import Doughnut from '../components/Doughnut';
import U5 from '../components/U5';
import authFetch from '../axios';
import AgeStat from '../components/AgeStat';
import OtherReg from '../components/OtherReg';
const Admin = () => {
const [visible,setVisible] = useState(false);
const [rez,setRez] = useState({});
const onClick = () => {
setVisible(true);
}



const onHide = () => {
    setVisible(false);
}


  


useEffect(() => {
  
const getStatz=async()=>{

    try {
        const statistics = await authFetch.get('https://npc-api.dsaved.com/v0/birth-registration/stats/birth-statistic-data');
console.log(statistics.data);
setRez(statistics.data[0]);
    } catch (error) {
        console.log(error)
    }
}

getStatz();
     
}, [])



    
  return (
    <>
    <div className="grid my-3">
          <div className="col-12  bg-green-700">
          <span className="text-0 font-bold text-sm">Total Registrations: {rez && rez.total_registration}</span> 
          </div>
        

        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-blue-dark shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Pending Registrations</span>
                        <div className="text-0 font-medium text-xl">{rez && rez.pending}</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-exclamation-circle text-blue-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">24 new </span>
                <span className="text-500">since last visit</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-blue-light shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Approved Registrations</span>
                        <div className="text-0 font-medium text-xl">{rez? rez.approved:''}</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-check-circle text-orange-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">%52+ </span>
                <span className="text-500">since last week</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-darkness shadow-2 p-3 border-round ">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Printed Certificates</span>
                        <div className="text-0 font-medium text-xl">{rez && rez.printed}</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-book text-cyan-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">520  </span>
                <span className="text-500">newly registered</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
            <div className="bg-redz shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-medium mb-3">Queried Registrations</span>
                        <div className="text-0 font-medium text-xl">{rez && rez.querried}</div>
                    </div>
                    <div className="flex align-items-center justify-content-center bg-white border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-question-circle text-purple-500 text-xl"></i>
                    </div>
                </div>
                {/* <span className="text-green-500 font-medium">85 </span>
                <span className="text-500">responded</span> */}
            </div>
        </div>
        <div className="col-12 md:col-6  py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex flex-column lg:flex-row lg:align-items-center lg:justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics by Age</div> 
                        <span className='cursor-pointer' onClick={() => onClick()}>view more..</span>
                    </div>
                    {/* <Chart type="bar" data={data}  options={horizontalOptions} /> */}
                    <AgeStat/>
                </div>
            </div>


      


            <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Under 5 birth registrations per state</div>
                     
                    </div>

                    {/* <Chart type="bar" data={barData} options ={basicOptions} /> */}
                    <U5/>
                </div>
            </div>

            <div className="col-12 md:col-7 lg:col-7 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Mother's age at birth</div>
                     
                    </div>

                    {/* <Chart type="bar" data={bar2Data} options ={basicOptions} width="100%" /> */}
                    <MotherAge/>
                
                </div>
            </div>

            <div className="col-12 md:col-5 lg:col-5 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Statistics by Mother's Literacy</div>
                      
                    </div>

                   <Doughnut/>
                </div>
            </div>
         
            <div className="col-12 md:col-6 lg:col-8 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth by place occurence</div>
                      
                    </div>

                    {/* <Chart type="line" data={lineData} ref={lineRef}  className='my-chart'/> */}
                    <BirthOccurence/>
                </div>
            </div>


            <div className="col-12 md:col-6 lg:col-4 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth by Sex</div>
                     
                    </div>

                  <SexBar/>
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


               
            <Dialog visible={visible} onHide={onHide} breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}}>
            <div className="col-12  py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Birth Registrations By Age Frequency By State</div> 
                    </div>
                    {/* <Chart type="bar" data={data12}   /> */}
                    <OtherReg/>
                </div>
            </div>
</Dialog>

    </div>
    </>
  )
}

export default Admin