import React,{useRef} from 'react'
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from '../assets/images/72.png'
// import Avatar from "../assets/images/avatar.png";
import { InputText } from 'primereact/inputtext';
import './home.css';
// import { Navigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

// import { logoutUser } from '../redux/functions';
const Homez = () => {
    // const dispatch = useDispatch();
    const nav = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("user-birth"); 
    localStorage.removeItem("token-birth");
   nav('/unauth');
    }
  // console.log("logout");
    // const btnRef30 = useRef(null);
    // const btnRef1 = useRef(null);
    // const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);

    // const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    // const btnRef9 = useRef(null);
    // const btnRef10 = useRef(null);
    // const btnRef12 = useRef(null);
    // const btnRef13 = useRef(null);
    // const btnRef14 = useRef(null);
    // const { userInfo } = useSelector((state) => state.user);
    const userInfo = JSON.parse(localStorage.getItem('user-birth'))
  return (              

    
<div className="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar-1" className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:sticky left-0 top-0 z-2 select-none" style={{ width: '280px' }}>
        <div className="flex flex-column h-full" style={{backgroundColor:"#0E7706"}}>
            <div className="flex align-items-center px-5 flex-shrink-0" style={{ height: '65px',backgroundColor:'white' }}>
                {/* <img src="assets/images/blocks/logos/hyper-300.svg" alt="hyper-300" height={30} /> */}
                <Link to='/' className='flex align-items-center cursor-pointer gap-2'>
                <img src={Logo} alt="hyper-300" height="45"  />
                <span className='text-sm text-green-500 font-bold'>VITAL REG Management System</span>
                </Link>
            </div>
            <div className="overflow-y-auto mt-3" >
                <ul className="list-none p-3 m-0 ">
                    {
                    userInfo?.permission?.permissions.includes('Can_List_Attestation')
                        &&
                    <li className='border-bottom-1 border-white'>
                    <Link to='/' className='flex align-items-center cursor-pointer p-3 transition-duration-150 transition-colors w-full'>
                        {/* <a className="p-ripple flex align-items-center cursor-pointer p-3  
                transition-duration-150 transition-colors w-full "> */}
                            <i className="pi pi-file mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Birth Attestations</span>
                            <Ripple />
                        {/* </a> */}
                        </Link>
                    </li>
                    }
                    
                    {/* <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef1} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Birth registrations</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/admin/admin-approved' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Approved Requests</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/admin/admin-flagged' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Flagged Requests</span>
                                    <Ripple />
                                </Link>
                            </li>
                        </ul>
                    </li> */}

{
                        userInfo?.permission?.permissions.includes('Can_List_Modification')
                        &&
    <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef8} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                         {/* eslint-disable-next-line */}
                            <a ref={btnRef8} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-user-edit mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Modifications</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/modify-birth' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Birth Registrations</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link to='/modify-attest' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Birth Attestations</span>
                                    <Ripple />
                                </Link>
                            </li>

                            <li>
                                <Link to='/modify-death' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Death Registrations</span>
                                    <Ripple />
                                </Link>
                            </li>
                            
                        </ul>
                    </li>
}

{
                       userInfo?.permission?.permissions.includes('Can_List_Birth')
                       &&
                    <li className='border-bottom-1 border-white'>
                    <Link to='/birth' className='flex align-items-center cursor-pointer p-3 transition-duration-150 transition-colors w-full'>
                        {/* <a className="p-ripple flex align-items-center cursor-pointer p-3  
                transition-duration-150 transition-colors w-full "> */}
                            <i className="pi pi-file mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Birth registrations</span>
                            <Ripple />
                        {/* </a> */}
                        </Link>
                    </li>
}
{
                        userInfo?.permission?.permissions.includes('Can_List_Death')
                        &&
                    <li className='border-bottom-1 border-white'>
                    <Link to='/death' className='flex align-items-center cursor-pointer p-3 transition-duration-150 transition-colors w-full'>
                        {/* <a className="p-ripple flex align-items-center cursor-pointer p-3  
                transition-duration-150 transition-colors w-full "> */}
                            <i className="pi pi-file mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Death registrations</span>
                            <Ripple />
                        {/* </a> */}
                        </Link>
                    </li>}

                    {
                       userInfo?.permission?.permissions.includes('Can_List_Stillbirth')
                       &&
                    <li className='border-bottom-1 border-white'>
                    <Link to='/still' className='flex align-items-center cursor-pointer p-3 transition-duration-150 transition-colors w-full'>
                        {/* <a className="p-ripple flex align-items-center cursor-pointer p-3  
                transition-duration-150 transition-colors w-full "> */}
                            <i className="pi pi-file mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Still birth registrations</span>
                            <Ripple />
                        {/* </a> */}
                        </Link>
                    </li>}

                    {
                        userInfo?.roles?.name==='DCR'&&
                    <li className='border-bottom-1 border-white'>
                    <Link to='/registrars' className='flex align-items-center cursor-pointer p-3 transition-duration-150 transition-colors w-full'>
                        {/* <a className="p-ripple flex align-items-center cursor-pointer p-3  
                transition-duration-150 transition-colors w-full "> */}
                            <i className="pi pi-file mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Registrars</span>
                            <Ripple />
                        {/* </a> */}
                        </Link>
                    </li>
}
                    {/* <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                           
                           
                            <a ref={btnRef7} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-file-excel mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Death registrations</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/death' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Statistics</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/death/registrations' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Registrations</span>
                                    <Ripple />
                                </Link>
                            </li>
                           
                        </ul>
                    </li> */}

                

{/* 
                    <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef9} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                           
                            <a ref={btnRef9} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-book mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Birth Attestations</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/attestation' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Statistics</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/attestation/registrations' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Registrations</span>
                                    <Ripple />
                                </Link>
                            </li>
                            
                        </ul>
                    </li> */}



                    {/* <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef14} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                           
                            <a ref={btnRef14} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-book mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Still Birth</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/still' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Statistics</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/birth/registrations' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Registrations</span>
                                    <Ripple />
                                </Link>
                            </li>
                            
                        </ul>
                    </li> */}

                    {/* <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef10} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            
                            <a ref={btnRef10} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                               <i className="pi pi-check mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Verified certificates</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/pending-cert' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Pending Applications</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/birth-reg' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Public organizations</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/birth-report' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Private organizations</span>
                                    <Ripple />
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                    {/* <li className='border-bottom-1 border-white'>
                        
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-check mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Verified certificates</span>
                            <Ripple />
                        </a>
                    </li> */}


{/* <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef12} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                          
                            <a ref={btnRef12} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                              <i className="pi pi-plus mr-2 text-white font-bold"></i>
                               <span className="font-medium text-white font-medium">Hospitals</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/hospital/pending' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Pending Applications</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/hospital/public' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Public hospitals</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/hospital/private' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Private hospitals</span>
                                    <Ripple />
                                </Link>
                            </li>
                        </ul>
                    </li> */}
                  
                  

                    {/* <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef13} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                           
                            <a ref={btnRef13} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                              <i className="pi pi-users mr-2 text-white font-bold"></i>
                               <span className="font-medium text-white font-medium">Registrars/DCR</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <Link to='/registrars' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Registrars</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li>
                                <Link  to='/dcr' className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">DCR</span>
                                    <Ripple />
                                </Link>
                            </li>
                   
                        </ul>
                    </li> */}
                    {/* <li className='border-bottom-1 border-white'>
                      
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Registrars/dcr</span>
                            <Ripple />
                        </a>
                    </li> */}
                    {/* <li className='border-bottom-1 border-white'>
                       
                        <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2 text-white font-bold"></i>
                            <span className="font-medium text-white font-medium">Settings</span>
                            <Ripple />
                        </a>
                    </li> */}
{/* 
                    <li className='border-bottom-1 border-white'>
                        <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                <span className="text-white font-medium">Visa Applications</span>
                                <i className="pi pi-chevron-right ml-auto mr-1 text-white"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                          
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Approved</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Queried</span>
                                    <Ripple />
                                </a>
                            </li>

                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">Rejected</span>
                                    <Ripple />
                                </a>
                            </li>

                            <li>
                                <a className="p-ripple flex align-items-center cursor-pointer p-3  border-round 
                    transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-chart-line mr-2 text-white font-bold"></i>
                                    <span className="font-medium text-white">None Responsive</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </li> */}
                   
                  
                 
                   
                </ul>
            </div>
            <div className="mt-auto mx-3">
               
                <ul className="list-none p-2 m-0 hidden">
                 
                    <li>
                        {/* eslint-disable-next-line */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
            transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2 text-white"></i>
                            <span className="font-medium text-white">Settings</span>
                            <Ripple />
                        </a>
                    </li>
                    <li  onClick={handleLogout}>
                        {/* eslint-disable-next-line */}
                        <a className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
            transition-duration-150 transition-colors w-full">
                            <i className="pi pi-sign-out mr-2"></i>
                            <span className="font-medium text-white"  >Sign Out</span>
                            <Ripple />
                        </a>
                    </li>
                </ul>
                <StyleClass nodeRef={btnRef3} selector="@prev" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout">
                     {/* eslint-disable-next-line */}
                    <a ref={btnRef3} className="p-ripple my-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50
        transition-duration-150 transition-colors w-full">
                        {/* <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" alt="avatar-f-1" className="mr-2" style={{ width: '28px', height: '28px' }} /> */}
                        <span className="font-medium text-white">{userInfo?.UserName
}</span>
                        <i className="pi pi-chevron-up ml-auto text-white"></i>
                        <Ripple />
                    </a>
                </StyleClass>
            </div>
        </div>
    </div>
    <div className="min-h-screen flex flex-column relative flex-auto">
        <div className="flex justify-content-between align-items-center px-5  shadow-2 relative lg:sticky top-0 left-0 border-bottom-1 surface-border z-1" style={{ height: '63px',backgroundColor:"#0E7706" }}>
            <div className="flex">
                <StyleClass nodeRef={btnRef4} selector="#app-sidebar-1" enterClassName="hidden" enterActiveClassName="fadeinleft" leaveToClassName="hidden" leaveActiveClassName="fadeoutleft" hideOnOutsideClick>
                    {/* eslint-disable-next-line */}
                    <a ref={btnRef4} className="p-ripple cursor-pointer block lg:hidden text-white mr-3">
                        <i className="pi pi-bars text-4xl"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <span className="p-input-icon-left hidden lg:inline">
                    <i className="pi pi-search"></i>
                    <InputText className="border-none" placeholder="Search" />
                </span>
            </div>
            <StyleClass nodeRef={btnRef5} selector="@next" enterClassName="hidden" enterActiveClassName="fadein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                 {/* eslint-disable-next-line */}
                <a ref={btnRef5} className="p-ripple cursor-pointer block lg:hidden text-700">
                    <i className="pi pi-ellipsis-v text-2xl"></i>
                    <Ripple />
                </a>
            </StyleClass>

        </div>
        <div className="p-5 flex flex-column flex-auto">
            <div className=" flex-auto">
<Outlet/>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default Homez