import React,{useEffect,useState} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";
import { Link } from 'react-router-dom';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
// import { Paginator } from 'primereact/paginator';
// import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
// import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import { ProgressSpinner } from 'primereact/progressspinner';
// import { getDeathRegz } from '../redux/apiCalls';
// import { getGender,getOrder,getPlace } from '../redux/apiCalls';
// import Filter from '../components/Filter';
import { changePage } from '../redux/birthSlice';
// import naija from "../assets/images/ci.svg"
import authFetch from '../axios';
const AdminVerifiedReg = () => {
  // eslint-disable-next-line
  const [rez, setRez] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [reg, setReg] = useState([]);

const dispatch = useDispatch();
// eslint-disable-next-line
const [basicFirst, setBasicFirst] = useState(0);
// eslint-disable-next-line
const [basicRows, setBasicRows] = useState(20);
// eslint-disable-next-line
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
//   const {
//     isLoading,
//     search,
//     result_per_page,
//     page,
//     registerations,
//     numPages,type
//   } = useSelector((state) => state.death);

  useEffect(() => {
  
    const getStatz=async()=>{
    
        try {
            const statistics = await authFetch.get('https://npc-cert.verxid.site/v0/dcr/registrar/total');
    console.log(statistics.data);
    setRez(statistics.data.total_registrars);
        } catch (error) {
            console.log(error)
        }
    }
    const getNz=async()=>{
    setIsLoading(true)
        try {
            const statistics = await authFetch.get('https://npc-cert.verxid.site/v0/dcr/registrar/list?search=&result_per_page=20&page=1');
    console.log(statistics.data);
    setReg(statistics.data.result);
    setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
    // dcr/registrar/list?search=&result_per_page=5&page=1
    getStatz();
     getNz()
    }, [])
//   useEffect(() => {
//     getDeathRegz(dispatch, search,
//             result_per_page,
//             page,
//            type
//            )
// }, [dispatch,search,
//     result_per_page,
//     page,
//     type]); 
    // eslint-disable-line react-hooks/exhaustive-deps


const statusBodyTemplate2 = (rowData) => {
    return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single-registrars/${rowData.User_ID}`} >
VIEW 
    </Link>
}




// const renderHeader1 = () => {
//     return (
// <Filter/>
//     )
// }
// const header1 = renderHeader1();
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
        <p className='text-white m-0 text-sm font-bold'>Total Registrars:{rez &&rez}</p>
        </div>
       
      

    {/* <div className='grid mt-2'> */}
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
                {/* <Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm" onClick={goBack}  /> */}
        <span className="text-xl font-medium text-900"> Registrars List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
            {/* <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" /> */}
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={reg} 
            //  ref={dt}
                    loading={isLoading}
                    stripedRows
                     responsiveLayout="stack"
                    //  header={header1}
                    //  paginator
                    //  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    //  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            <Column field="UserName" header="UserName"></Column>
                            <Column field="Email" header="email"></Column>
                            <Column field="Phone_No" header="Phone_No"></Column>
                           
                           
                           
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                    {/* <Paginator  first ={basicFirst} rows={basicRows} totalRecords={numPages}  onPageChange={onBasicPageChange}></Paginator> */}
                </div>
            </div>
            
           
</div> 
    </>
  )
}

export default AdminVerifiedReg;