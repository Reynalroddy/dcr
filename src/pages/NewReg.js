
import React from 'react'
import {Button} from "primereact/button"
const NewReg = () => {
  return (
    <div classNameName='grid mt-2 p-4'>
    <div classNameName="col-12 lg:col-12">
               <div classNameName="card border-round shadow-2 p-3">
               {/* <div className="card"> */}
    <h5 className='border-green-500 border-bottom-3 text-lg font-bold mb-3'>New Registrar</h5>
    <div className="formgrid grid">
        <div className="field col-12 md:col-4">
            <label for="firstname6">Name</label>
            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="lastname6">Phone number</label>
            <input id="lastname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="firstname6">email</label>
            <input id="firstname6" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        <div className="field col-12 md:col-4">
            <label for="lastname6">Password</label>
            <input id="lastname6" type="password" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div>
        {/* <div className="field col-12 md:col-4">
            <label for="address">Address</label>
            <textarea id="address" type="text" rows="4" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
        </div> */}
        {/* <div className="field col-12 md:col-4">
            <label for="city">City</label>
            <input id="city" type="text" className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
        </div> */}
        <div className="field col-12 md:col-4">
            <label for="state">State</label>
            <select id="state" className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{appearance: "auto"}}>
                <option>Arizona</option>
                <option>California</option>
                <option>Florida</option>
                <option>Ohio</option>
                <option>Washington</option>
            </select>
        </div>

        <div className="field col-12 md:col-4">
            <label for="state">DCR</label>
            <select id="state" className="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style={{appearance: "auto"}}>
                <option>Arizona</option>
                <option>California</option>
                <option>Florida</option>
                <option>Ohio</option>
                <option>Washington</option>
            </select>
        </div>
        <div className="field col-12 md:col-4">
          
        <Button label="Create Registrar" className="p-button-success my-2" />
        </div>
      
    </div>
</div>
               </div>
               </div>
             
  )
}

export default NewReg







