// import React from 'react'
import React,{useEffect,useState} from 'react'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from "axios";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import "./admin.css";
const CertPending = () => {
    const [loading1, setLoading1] = useState(true);
    const [filters1, setFilters1] = useState(null);
    const [globalFilterValue1, setGlobalFilterValue1] = useState('');
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const getDatz=async ()=>{

  const statz = await axios.get('https://jsonplaceholder.typicode.com/users');
  setProducts(statz.data)
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
  VIEW 
      </Link>
  }
  const clearFilter1 = () => {
      initFilters1();
  }
  const renderHeader1 = () => {
      return (
          <div className="flex flex-column lg:flex-row gap-2 lg:gap-0 lg:justify-content-between ">
              <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} />
              <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Keyword Search" className='w-full' />
              </span>
          </div>
      )
  }
  const header1 = renderHeader1();
  return (
    <div className="grid my-3">
         <div className="col-12 md:col-12 lg:col-12">
<div className='w-full flex justify-content-between'>
<h4 className='text-green-500 font-medium text-md'>Pending Applications </h4>



</div>
</div>

           <div className='col-12 md:col-12 lg:col-12'>
            <div className="card border-round shadow-2 py-3 w-full">
               
            <DataTable value={products} 
                  filters={filters1}
                    loading={loading1}
                    stripedRows
                     responsiveLayout="stack"
                     header={header1}
                     paginator
                     paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={5} rowsPerPageOptions={[5,10,50]}
                  
                        >
                       
                            
                            <Column field="name" header="NAME"></Column>
                            <Column field="username" header="REGISTRATION NUMBER"></Column>
                           
                            <Column field="phone" header="ORGANIZATION TYPE"></Column>
                            <Column field="name" header="LOCATION"></Column>   
                            <Column field="username" header="COUNTRY"></Column> 
                            
                        <Column field="" header="Action" body={statusBodyTemplate2} />
                    </DataTable>
                </div>

            </div> 
            </div>
  )
}

export default CertPending

