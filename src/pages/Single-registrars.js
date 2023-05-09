// import React, {  useState } from 'react'
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { Dropdown } from 'primereact/dropdown';
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { InputText } from 'primereact/inputtext';
// import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
// import { Tooltip } from 'primereact/tooltip';
import authFetch from '../axios';

const SingleRegistrars = () => {
    const {id}=useParams();
    const navigate=useNavigate();
    const goBack = () => navigate(-1);
    // eslint-disable-next-line
    const [isLoading, setIsLoading] = useState(false);
    // const [filters1, setFilters1] = useState(null);
    const [rez, setRez] = useState({});
    const [reg, setReg] = useState(0);
    // const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  
    useEffect(() => {
  
        const getStatz=async()=>{
        
            try {
                const statistics = await authFetch.get(`https://npc-api.dsaved.com/v0/dcr/registrar/single/${id}`);
        console.log(statistics.data);
        setRez(statistics.data);
            } catch (error) {
                console.log(error)
            }
        }
        const getNz=async()=>{
        setIsLoading(true)
            try {
                const statistics = await authFetch.get(`https://npc-api.dsaved.com/v0/dcr/registrar/count/${id}`);
        // console.log(statistics.data);
        setReg(statistics.data.total);
        setIsLoading(false)
            } catch (error) {
                console.log(error)
                setIsLoading(false)
            }
        }
        // dcr/registrar/list?search=&result_per_page=5&page=1
        getStatz();
         getNz()
        }, [id])
  
  
//   const initFilters1 = () => {
//       setFilters1({
//           'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        
//       });
       
//       setGlobalFilterValue1('');
//   }
  
//   const onGlobalFilterChange1 = (e) => {
//       const value = e.target.value;
//       console.log(value);
//       let _filters1 = { ...filters1 };
//       _filters1['global'].value = value;
//   console.log(_filters1)
//       setFilters1(_filters1);
//       setGlobalFilterValue1(value);
//   }
//   const statusBodyTemplate2 = (rowData) => {
//       return <Link  className={`bg-primary border-round-lg text-sm text-primary font-bold p-1`} to={`/single-registrars/${rowData.id}`} >
//   VIEW CERTIFICATE
//       </Link>
//   }
//   const statusBodyTemplate1 = (rowData) => {
//     return <span  className={`btn  text-primary font-bold`} >
// Status
//     </span>
// }
//   const clearFilter1 = () => {
//       initFilters1();
//   }
//   const renderHeader1 = () => {
//       return (
//           <div className=" hidden md:flex justify-content-between">
//               <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
//               <span className="p-input-icon-left">
//                   <i className="pi pi-search" />
//                   <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
//               </span>
//           </div>
//       )
//   }
//   const header1 = renderHeader1();
//   const dt = useRef(null);
     
  
//   const cols = [
//     { field: 'code', header: 'Code' },
//     { field: 'name', header: 'Name' },
//     { field: 'category', header: 'Category' },
//     { field: 'quantity', header: 'Quantity' }
//   ];
  
//   const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));
  
//   const exportPdf = () => {
//     import('jspdf').then(jsPDF => {
//         import('jspdf-autotable').then(() => {
//             const doc = new jsPDF.default(0, 0);
//             doc.autoTable(exportColumns, products);
//             doc.save('products.pdf');
//         })
//     })
//   }
  
  
//   const exportExcel = () => {
//     import('xlsx').then(xlsx => {
//         const worksheet = xlsx.utils.json_to_sheet(products);
//         const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//         const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//         saveAsExcelFile(excelBuffer, 'products');
//     });
//   }
//   const saveAsExcelFile = (buffer, fileName) => {
//     import("file-saver").then((FileSaver) => {
//       let EXCEL_TYPE =
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//       let EXCEL_EXTENSION = ".xlsx";
//       const data = new Blob([buffer], {
//         type: EXCEL_TYPE,
//       });
//       FileSaver.saveAs(
//         data,
//         fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
//       );
//     });
//   };
    // const cities = [
    //     { name: 'DCR', code: 'cdr' },
        
        
    // ];
  // const guy=[1,2]
//   const [displayBasic2, setDisplayBasic2] = useState(false);
//   const [selectedCity1, setSelectedCity1] = useState(null);
//   const[city,setCity] = useState();
//   const onCityChange = (e) => {
//     setSelectedCity1(e.value);
// }
//       const dialogFuncMap = {
         
//           'displayBasic2': setDisplayBasic2,
         
//       }
  
//       const onClick = (name, position) => {
//           dialogFuncMap[`${name}`](true);
  
         
//       }
  
  
    //   const onHide = (name) => {
    //       dialogFuncMap[`${name}`](false);
    //   }
  
    //   const renderFooter = (name) => {
    //       return (
    //           <div className='flex justify-content-between'>
    //               <Button label="Close" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
    //               <Button label="Approve" icon="pi pi-check" onClick={() => onHide(name)} className="p-button-success" />
                 
    //           </div>
    //       );
    //   }
  return (
    <div>

<div className="surface-card p-4 shadow-2 border-round my-2">


<Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm w-2 my-3" onClick={goBack}  />
        <div className="flex flex-column md:flex-row md:flex-wrap pt-2 border-top-1 border-bottom-1 border-green-300">
        {/* <Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm w-2" onClick={goBack}  /> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Name</div>
            <div className="text-900">{rez?.UserName}</div>
            
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Phone Number</div>
            <div className="text-900">{rez?.Phone_No}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Email Address</div>
            <div className="text-900">{rez?.Email}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2"> STATE</div>
            <div className="text-900">{rez&&rez.State?.State_Name}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        {/* <div className="col-12 md:col-2 p-3">
            <div className="text-500 font-medium mb-2">Reg Centre</div>
            <div className="text-900">Dubai</div>
            
        </div> */}
        <div className="col-12 md:col-2 p-3">
            <div className="text-600 font-bold text-sm mb-2">TOTAL REGISTRATIONS</div>
            <div className="text-900">{reg&&reg}</div>
            {/* <div className="text-900">Elliot Alderson</div> */}
        </div>
        
      
       
       
       
    </div>

   
   
 
  </div>

              
                 
                   

   </div>
  )
}

export default SingleRegistrars;