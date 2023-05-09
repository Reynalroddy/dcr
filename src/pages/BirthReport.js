import React from 'react'
// import { Chart } from 'primereact/chart';
import './admin.css';
// import male from "../assets/images/man.svg"
// import female from "../assets/images/woman.svg"
import naija from "../assets/images/naija.png"
import nc from "../assets/images/nc.png"

import Logo from '../assets/images/72.png'
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//   } from "recharts";
const BirthReport = () => {
// const lineRef= useRef(null);


// let stackedOptions = {
//     maintainAspectRatio: false,
//     aspectRatio: 1.2,
//     indexAxis: 'y',
//     plugins: {
//         tooltips: {
//             mode: 'index',
//             intersect: false
//         },
//         legend: {
//             labels: {
//                 color: '#495057'
//             }
//         }
//     },
//     scales: {
//         x: {
//             stacked: true,
//             ticks: {
//                 color: '#495057'
//             },
//             grid: {
//                 color: '#ebedef'
//             }
//         },
//         y: {
//             stacked: true,
//             ticks: {
//                 color: '#495057'
//             },
//             grid: {
//                 color: '#ebedef'
//             }
//         }
//     }
// };

//     const lineData = {
//         labels: ['2017', '2020', '2019', '2018', '2006', '2003', '2013'],
//         datasets: [
//             {
//                 label: 'Death registrations',
//                 data: [60, 50, 20, 91, 15, 55, 40],
               
//                 borderColor: '#6E00FF',
//                 tension: .4,
//                 backgroundColor:'#6E00FF',
               
//             },
//             {
//                 label: 'Birth registrations',
//                 data: [65, 59, 80, 81, 56, 50, 45],
               
//                 borderColor: '#FFD35A',
//                 tension: .4,
//                 backgroundColor:'#FFD35A',
                
//             },
//             {
//                 label: 'Birth attestation',
//                 data: [56, 90, 67, 18, 67, 50, 40],
              
//                 borderColor: '#68A5FF',
//                 tension: .4,
//                 backgroundColor:'#68A5FF',
                
//             },
            
//         ]
//     };
    // const doughnutData = {
    //     labels: ['A', 'B', 'C'],
    //     datasets: [
    //         {
    //             data: [300, 50, 100],
    //             backgroundColor: [
    //                 "#e2841a",
    //                 "#0F97C7",
    //                 "#10b163"
    //             ],
    //             hoverBackgroundColor: [
    //                 "#edb575",
    //                 "#6fc0dd",
    //                 "#6fd0a1"
    //             ]
    //         }]
    // };

    // const barData = {
    //     labels: ['Borno','Abuja','Nasarawa','Kano','Lagos','Kaduna'],
    //     datasets: [{
    //         label:'States',
    //        data: [20, 40, 60,34,55,23],
    //        backgroundColor: ["#29F683"], 
    //        borderRadius:50,
    //        barThickness: 30,
           
    //     }],
    // }  


    // const bar3Data = {
    //     labels: ['Male','Female'],
    //     datasets: [
    //         {
    //             type: 'bar',
    //             label: 'Birth registration',
    //             backgroundColor: '#4791FF',
    //             data: [
    //                 50,
    //                 25,
    //                 12,
                  
    //             ],
    //             borderRadius:50,
    //             barThickness: 30,
    //         },
    //         {
    //             type: 'bar',
    //             label: 'Death registration',
    //             backgroundColor: '#FFD35A',
    //             data: [
    //                 50,
    //                 25,
    //                 12,
                    
    //             ],
    //             borderRadius:50,
    //             barThickness: 30,
    //         },
    //         {
    //             type: 'bar',
    //             label: 'Birth attestation',
    //             backgroundColor: 'red',
    //             data: [
    //                 70,
    //                 29,
    //                 5,
                    
    //             ]
    //             ,
    //             borderRadius:50,
    //             barThickness: 30,
               
    //         },]
    // };
    // const bar2Data = {
    //     labels: ['9-17','18-26','27-35','36-50','51 above'],
    //     datasets: [{
    //         label:'States',
    //        data: [20, 40, 60,34,27],
    //        backgroundColor: ["#248129"], 
    //        borderRadius:50,
    //        barThickness: 30,
    //     }]
    // };

//     const bar2Data = [
//         {name: '9-17',
//         uv: 40,
//         pv: 2400,
//       },
//       {name: '18-26',
//       uv: 20,
//       pv: 2400,
//     },
//     {name: '27-35',
//     uv: 22,
//     pv: 2400,
//   }
//   ,
//   {name: '36-50',
//   uv: 10,
//   pv: 2400,
// },
// {name: '51 above',
// uv: 48,
// pv: 2400,
// }
//     ]

    // const data = {
    //     labels: ['Birth Registration','Death Registration','Birth Attestation'],
    //     datasets: [
    //         {
    //         label:'North Central',
    //        data: [20, 40, 60,100,88,56],
    //        backgroundColor: "#BC5FD3", 
    //        borderRadius:50,
    //        barThickness: 15,
    //     },
    //     {
    //         label: 'North East',
    //         backgroundColor: '#FF7F2A',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         borderRadius:50,
    //        barThickness: 15,
    //     },
    //     {
    //         label: 'North West',
    //         backgroundColor: '#008000',
    //         data: [28, 48, 40, 19, 86, 27, 90],
    //         borderRadius:50,
    //        barThickness: 15,
    //     },
    //     {
    //         label:'South East',
    //        data: [20, 40, 60,55,34,77],
    //        backgroundColor: "#D40000", 
    //        borderRadius:50,
    //        barThickness: 15,
    //     },
    //     {
    //         label: 'South South',
    //         backgroundColor: '#D4AA00',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         borderRadius:50,
    //        barThickness: 15,
    //     },
    //     {
    //         label: 'South West',
    //         backgroundColor: '#0055D4',
    //         data: [28, 48, 40, 19, 86, 27, 90],
    //         borderRadius:50,
    //        barThickness: 15,
    //     },
    // ]
    //  }

    //  const doughnut =    {
    //  labels: ['Accident', 'Illness','others'],
    //  datasets: [
    //      {
    //          data: [80, 50,30],
    //          backgroundColor: [
    //              "#FEBC31",
    //              "#99DA01",
    //              "#83F3FF"
                
    //          ],
    //         }
    //     ],
        
    // }

    // const barData2 = {
    //     labels: ['0-5 years', '6-10 years', '11-17 years'],
    //     datasets: [
    //         {
    //             label: '0-5 years',
    //             backgroundColor: '#2F96FB',
    //             borderColor: '#2F96FB',
    //             data: [65],
    //             borderRadius:50
    //         }, 
            // {
            //     label: '6-10 years',
            //     backgroundColor: '#FEA93B',
            //     borderColor: '#FEA93B',
            //     data: [28],
            //     borderRadius:50
            // }

            // , {
            //     label: '11-17 years',
            //     backgroundColor: '#0A5CAC',
            //     borderColor: '#0A5CAC',
            //     data: [18],
            //     borderRadius:50
            // }
        // ]
        // ,
        // datasets: [
         
        //     {
        //         label: '6-10 years',
        //         backgroundColor: '#FEA93B',
        //         borderColor: '#FEA93B',
        //         data: [28],
        //         borderRadius:50
        //     }
        // ]
    // };

    // let horizontalOptions = {
    //     indexAxis: 'y',
    //     maintainAspectRatio: false,
    //     aspectRatio: 2,
    //     plugins: {  
    //     legend: {
          
    //         display:false
    //     }
    // },
    //     scales: {
    //         y: {
    //             grid: {
    //                 display: false,
    //               }
    //         },
    //         x: {
    //             grid: {
    //               display: false,
    //             }
    //           },
    //       }
      
    // };

    // let basicOptions = {
        
    //     aspectRatio: 2,
    //     maintainAspectRatio: false,
    //     scales: {
    //         y: {
    //             grid: {
    //                 display: false,
    //               }
    //         },
    //         x: {
    //             grid: {
    //               display: false,
    //             }
    //           },
    //       }

      
    // };


    
  return (
    <>
    <div className="grid my-3">
         <div className="col-12 md:col-6 lg:col-3">
        <div className="bg-white shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block  text-sm font-medium  mb-3">Total Birth Registrations</span>
                        <div className=" font-bold text-xl">12,000,000</div>
                        <div className='flex mt-2'>
                        <i className="pi pi-arrow-up text-green-500 text-xs font-bold"></i>
                        <span className='text-xs text-green-500 font-bold'>4.6%</span>
                        </div>
                        
                    </div>
                    <div className="flex align-items-center justify-content-center " style={{ width: '2.8rem', height: '2.8rem' }}>
                       <img src={naija} className='w-full' alt='' />
                        
                    </div>
                </div>
                
            </div>
        </div>
      
  
        {/* <div className="col-12 md:col-6 lg:col-6 py-4">
                <div className="surface-card shadow-2 border-round p-3">
                    <div className="flex align-items-center justify-content-between mb-3">
                        <div className="text-900 font-medium">Yearly Registration Statistics</div>
                      
                    </div>

                    <Chart type="line" data={lineData} ref={lineRef}  className='my-chart'/>
                </div>
            </div> */}
      <div className="col-12">
<div className='w-full flex flex-column '>
<h4>Registrations by Geo-political zone</h4>
<div className='py-2 bg-green-500'>

</div>
</div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

<div className='col-12 md:col-4 '>
<div className="flex flex-column align-items-center  gap-2 surface-card shadow-2 border-round p-3">
<img  src={Logo} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-md uppercase font-bold'>North Central</span>
<span className='text-xs text-green-500 '>6,500,00</span>
<img  src={nc} style={{width:'3rem',height:'3rem'}} alt=''/>
<span className='text-green-500 text-xs font-bold'>view states</span>
    </div>
</div>

        


          
           

         

           
         

    </div>
    </>
  )
}

export default BirthReport;