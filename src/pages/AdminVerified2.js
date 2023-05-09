import React,{useEffect,useRef,useState} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { Paginator } from 'primereact/paginator';
// import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// import { ProgressSpinner } from 'primereact/progressspinner';
import { getDeathRegz } from '../redux/apiCalls';
// import { getGender,getOrder,getPlace } from '../redux/apiCalls';
import FilterDeath from '../components/FilterDeath';
import { changePage } from '../redux/deathSlice';
const AdminVerified2 = () => {
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
const navigate = useNavigate();
    const goBack = () => navigate(-1);
  const loc = useLocation();
  const sp = new URLSearchParams(loc.search); //search?category=cat
  const stateId = parseInt(sp.get("state"))||null;
  const lgaId = parseInt(sp.get("lga"))||null;
  const centerId = parseInt(sp.get("center"))||null;
  const {
    isLoading,
    search,
    result_per_page,
    page,
    Sex,
    registerations,
    numPages,
    Cause
  } = useSelector((state) => state.death);
  useEffect(() => {
           getDeathRegz(dispatch, search,
            result_per_page,
            page,
            stateId,
            lgaId,
           centerId,
            Sex,
           Cause
           )

}, [dispatch,search,
    result_per_page,
    page,
    stateId,
    lgaId,
    centerId,
    Sex,
    Cause
    ]); // eslint-disable-line react-hooks/exhaustive-deps


const statusBodyTemplate2 = (rowData) => {
    return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single-death/${rowData.id}`} >
VIEW 
    </Link>
}
const genderTemplate = (rowData) => {
    return <p  className={`font-bold`}>
{rowData.deceased_sexData.Gender}
    </p>
}

const nameTemplate = (rowData) => {
  return <p  className={`font-bold`}>
{`${rowData.deceased_surname} ${rowData.deceased_firstname} ${rowData.deceased_middlename} `}
  </p>
}


// const birthTypeTemplate = (rowData) => {
//     return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single/${rowData.id}`} >
// VIEW 
//     </Link>
// }
// const birthOrder = (rowData) => {
//     return <p  className={`font-bold`}>
//     {getOrder(rowData.Birth_Order)}
//         </p>
// }

const causeDeath = (rowData) => {
  return <p  className={`font-bold`}>
  {rowData.deceased_cause_of_deathData.Description}
      </p>
}




const state=(rowData)=>{
  return <p>{rowData.deceased_stateData.State_Name}</p>
  }

const renderHeader1 = () => {
    return (
<FilterDeath/>
    )
}
const header1 = renderHeader1();
const dt = useRef(null);
   

const cols = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
];

const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }));

const exportPdf = () => {
  import('jspdf').then(jsPDF => {
      import('jspdf-autotable').then(() => {
          const doc = new jsPDF.default(0, 0);
          doc.autoTable(exportColumns, registerations);
          doc.save('products.pdf');
      })
  })
}


const exportExcel = () => {
  import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(registerations);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      saveAsExcelFile(excelBuffer, 'products');
  });
}
const saveAsExcelFile = (buffer, fileName) => {
  import("file-saver").then((FileSaver) => {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  });
};
// if(isLoading){
//     return <div className='flex justify-content-center align-items-center'>
//     <ProgressSpinner style={{width:'3rem',height:'3rem'}}/>
//     </div>
//     }
  return (
    <>
    
    {/* <div className="grid">
        <div className="col-12 md:col-6 lg:col-6">
            <div className="bg-black-alpha-90 shadow-2 p-3 border-round">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-0 font-bold mb-3">Total Verified Requests</span>
                        <div className="text-0 font-medium text-xl">33</div>
                    </div>
                    <div className="flex align-items-center justify-content-center  border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-shopping-cart text-0 text-xl"></i>
                    </div>
                </div>
               
            </div>
        </div>

            </div> */}
    {/*  */}

    <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
                <Button label="Go back" icon="pi pi-arrow-left" className="p-button-sm" onClick={goBack}  />
        <span className="text-xl font-medium text-900">Registration List</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={registerations} 
             ref={dt}
                    loading={isLoading}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                    //  paginator
                    //  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    //  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            <Column body={nameTemplate} header="Name"></Column>
                            <Column field="death_certificate_number" header="Certificate Number"></Column>
                            <Column field="email" header="Gender" body={genderTemplate}></Column>
                            <Column  header="Cause of death" body={causeDeath}></Column>
                            {/* <Column field="Date_Of_Birth" header="Date of Birth"></Column> */}
                            <Column field="date_created" header="Date registered"></Column>
                            <Column field="deceased_age_at_death"  header="Age of death"></Column>
                            {/* <Column body={center} header="Reg_Center_Name"></Column> */}
                            <Column body={state}  header="State"></Column>
                            {/* <Column field="phone" header="Birth Order"></Column> */}
                            {/* <Column field="imei" header="Device IMEI"></Column> */}
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

export default AdminVerified2;