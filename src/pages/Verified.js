import React,{useEffect,useState,useRef} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
// import jsPDF from 'jspdf';
import { Tooltip } from 'primereact/tooltip';
const Verified = () => {
  const [loading1, setLoading1] = useState(true);
  const [filters1, setFilters1] = useState(null);
  const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getDatz=async ()=>{
// const statz = await axios.get('https://api.verxid.site/bt-mdm/get-device');
// console.log(statz.data.results)
const statz = await axios.get('https://jsonplaceholder.typicode.com/users');
console.log(statz.data)
// setMyStatz(statz.data.mtn);
setProducts(statz.data)
    // setProducts(statz.data.results)
    setLoading1(false)
    }
            getDatz()
           

}, []); // eslint-disable-line react-hooks/exhaustive-deps

useEffect(() => {
   
            initFilters1();

}, []); // eslint-disable-line react-hooks/exhaustive-deps


const initFilters1 = () => {
    setFilters1({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
      
    });
     
    setGlobalFilterValue1('');
}

const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    console.log(value);
    let _filters1 = { ...filters1 };
    _filters1['global'].value = value;
console.log(_filters1)
    setFilters1(_filters1);
    setGlobalFilterValue1(value);
}
const statusBodyTemplate2 = (rowData) => {
    return <Link  className={`btn btn-primary text-primary font-bold`} to={`/single-device/${rowData.id}`} >
VIEW DEVICE
    </Link>
}
const clearFilter1 = () => {
    initFilters1();
}
const renderHeader1 = () => {
    return (
        <div className="flex justify-content-between">
            <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" />
            </span>
        </div>
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
          doc.autoTable(exportColumns, products);
          doc.save('products.pdf');
      })
  })
}


const exportExcel = () => {
  import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(products);
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
  return (
    <>
    
    <div className="grid">
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
                {/* <span className="text-green-500 font-medium">24 new </span>
                <span className="text-500">since last visit</span> */}
            </div>
        </div>

            </div>
    {/*  */}

    <div className='grid mt-2'>
     <div className="col-12 lg:col-12">
                <div className="card border-round shadow-2 p-3 ">
                <div className="mb-3 flex align-items-center justify-content-between p-3">
        <span className="text-xl font-medium text-900">Pending Requests</span>
        <div className="flex align-items-center export-buttons">
            {/* <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" /> */}
            <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
            {/* <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" /> */}
        </div>
       
    </div>
             <DataTable value={products} 
             ref={dt}
                  filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="scroll"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                        {/* <Column field="id" header="Device Id"></Column> */}
                            <Column field="name" header="NAME"></Column>
                            <Column field="username" header="REQUEST NUMBER"></Column>
                            <Column field="email" header="REQUEST DATE"></Column>
                            <Column field="phone" header="STATUS"></Column>
                            {/* <Column field="imei" header="Device IMEI"></Column> */}
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                    <Tooltip target=".export-buttons>button" position="bottom" />
                </div>
            </div>
            
           
</div> 
    </>
  )
}

export default Verified;