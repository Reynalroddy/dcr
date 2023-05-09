import React,{useEffect,useState} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";
import { Link } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
// import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
// import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import { ProgressSpinner } from 'primereact/progressspinner';
import { getBirthRegz } from '../redux/apiCalls';
// import { getGender,getOrder,getPlace } from '../redux/apiCalls';
import Filter from '../components/Filter';
import { changePage } from '../redux/birthSlice';
import naija from "../assets/images/ci.svg"
import authFetch from '../axios';
const AdminVerified = () => {
  // eslint-disable-next-line
  const [rez, setRez] = useState({});
const dispatch = useDispatch();
const [basicFirst, setBasicFirst] = useState(0);
// eslint-disable-next-line
const [basicRows, setBasicRows] = useState(20);
const onBasicPageChange = (event) => {

  // console.log(event)
  setBasicFirst(event.first);
  // setBasicRows(event.rows);
  dispatch(changePage(event.page + 1))
}
// const navigate = useNavigate();
    // const goBack = () => navigate(-1);
  // const loc = useLocation();
  // const sp = new URLSearchParams(loc.search); 
  //search?category=cat
  // const stateId = parseInt(sp.get("state"))||null;
  // const lgaId = parseInt(sp.get("lga"))||null;
  // const centerId = parseInt(sp.get("center"))||null;
  const {
    isLoading,
    search,
    result_per_page,
    page,
    registerations,
    numPages,type
  } = useSelector((state) => state.birth);
  useEffect(() => {

    const getStatz=async()=>{
        
        try {
            const statistics = await authFetch.get('https://npc-api.dsaved.com/v0/birth-registration/stats');
    // console.log(statistics.data);
    setRez(statistics.data);
        } catch (error) {
            console.log(error)
        }
    }


        
    getStatz();


          getBirthRegz(dispatch, search,
            result_per_page,
            page,
           type
           )

}, [dispatch,search,
    result_per_page,
    page,
    type]); 

    
    // eslint-disable-line react-hooks/exhaustive-deps


const statusBodyTemplate2 = (rowData) => {
    return <Link  className={`btn btn-primary text-primary font-bold`} to={`/singleBirth/${rowData.Birth_Reg_ID}`} >
VIEW 
    </Link>
}




const renderHeader1 = () => {
    return (
<Filter/>
    )
}
const header1 = renderHeader1();
// const dt = useRef(null);
   

// const cols = [
//   { field: 'code', header: 'Code' },
//   { field: 'name', header: 'Name' },
//   { field: 'category', header: 'Category' },
//   { field: 'quantity', header: 'Quantity' }
// ];

// const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

// const exportPdf = () => {
//   import('jspdf').then(jsPDF => {
//       import('jspdf-autotable').then(() => {
//           const doc = new jsPDF.default(0, 0);
//           doc.autoTable(exportColumns, registerations);
//           doc.save('products.pdf');
//       })
//   })
// }


// const exportExcel = () => {
//   import('xlsx').then(xlsx => {
//       const worksheet = xlsx.utils.json_to_sheet(registerations);
//       const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//       const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//       saveAsExcelFile(excelBuffer, 'products');
//   });
// }
// const saveAsExcelFile = (buffer, fileName) => {
//   import("file-saver").then((FileSaver) => {
//     let EXCEL_TYPE =
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//     let EXCEL_EXTENSION = ".xlsx";
//     const data = new Blob([buffer], {
//       type: EXCEL_TYPE,
//     });
//     FileSaver.saveAs(
//       data,
//       fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
//     );
//   });
// };

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
                        <span className="block  text-sm font-medium  mb-3">Pendings Approvals</span>
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

    {/* <div className='grid mt-2'> */}
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
                {/* <Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm" onClick={goBack}  /> */}
        <span className="text-xl font-medium text-900"> Registration List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
            {/* <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" /> */}
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={registerations} 
            //  ref={dt}
                    loading={isLoading}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                    //  paginator
                    //  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    //  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            <Column field="FirstName" header="first Name"></Column>
                            <Column field="SurName" header="surname"></Column>
                            <Column field="MiddleName" header="middlename"></Column>
                           
                            <Column field="Date_Registerred" header="Date registered"></Column>
                           
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                    <Paginator  first ={basicFirst} rows={basicRows} totalRecords={numPages}  onPageChange={onBasicPageChange}></Paginator>
                </div>
            </div>
            
           
</div> 
    </>
  )
}

export default AdminVerified;