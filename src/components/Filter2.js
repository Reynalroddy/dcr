import React,{} from
 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useDispatch,useSelector } from "react-redux";
import { handleChange,clearFilters } from '../redux/deathSlice';
// import { getSex } from '../redux/apiCalls';
const Filter2 = () => {
    // const [city, setCity] = useState('');
    const dispatch = useDispatch();
    
    const {
        search,
       type,
      //  typeOptions
      } = useSelector((state) => state.death);

    const typeOptions = [
        {label: 'Approved', value: 'approved'},
        {label: 'Queried', value: 'queried'},
        {label: 'Pending', value: 'pending'},
     
    ];
    const clearForm = () => {
        // e.preventDefault();
        dispatch(clearFilters());
      };

    console.log(type)
  return  (
    <div className=" hidden md:flex justify-content-between">
        {/* <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined" onClick={clearFilter1} /> */}
       <div className='grid '>
<div className='col-12 md:col-6'>

            <InputText 
            value={search} 
            // onChange={onGlobalFilterChange1}
            onChange={(e) => dispatch(handleChange({ name:'search', value:e.target.value }))}
             placeholder="Keyword Search" />
       

</div>

<div className='col-12 md:col-6'>


<Dropdown value={type} options={typeOptions} onChange={(e) => dispatch(handleChange({ name:'type', value:e.value }))} placeholder="Select type"/>

</div>


<div className='col-12 md:col-4'>
{/* <Dropdown value={BirthType} options={typeOptions} onChange={(e) => setCity(e.value)} placeholder="Select Birth type"/> */}
<Button label="Reset Filter" className="p-button-warning" onClick={clearForm}  />
</div>

       </div>
        
    </div>
)
}

export default Filter2