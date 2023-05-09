import React,{useRef} from 'react'
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { Outlet, Link } from "react-router-dom";
import Logo from '../assets/images/logs.png'
import Avatar from "../assets/images/avatar.png";
const Home2 = () => {
    const btnRef30 = useRef(null);
    const btnRef28 = useRef(null);
    const btnRef29 = useRef(null);

    const btnRef7 = useRef(null);

  return (
    <div className="min-h-screen flex flex-column">
     <div className="surface-overlay py-3 px-5 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '65px' }}>
            <img src={Logo} alt="hyper-300" height="40" className="mr-0 lg:mr-6" />
            <StyleClass nodeRef={btnRef7} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                {/* eslint-disable-next-line */}
                <a ref={btnRef7} className="p-ripple cursor-pointer block lg:hidden text-gray-800">
                    <i className="pi pi-bars text-4xl"></i>
                    <Ripple />
                </a>
            </StyleClass>
            <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 top-100 z-1 shadow-2 lg:shadow-none">
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row ">
                   
                </ul>
                <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-indigo-400 lg:border-top-none">
                  
                    <li className="h-full relative">
                <StyleClass nodeRef={btnRef30} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                     {/* eslint-disable-next-line */}
                    <a ref={btnRef30} className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none  border-transparent  transition-colors transition-duration-150">
                        <img src={Avatar}  alt='avatar' className="lg:mr-0" style={{ width: '28px', height: '28px' }} />
                        <span className="mx-2 font-medium text-900">Jane Sanders</span>
                        <i className="pi pi-angle-down"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <div className="hidden static lg:absolute w-full surface-overlay left-0 top-100 z-5 shadow-none lg:shadow-2 origin-top border-round pl-3 lg:pl-0">
                    <ul className="list-none p-0 m-0">
                        {/* <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-user mr-2"></span>
                                <span className="font-medium">Profile</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-cog mr-2"></span>
                                <span className="font-medium">Settings</span>
                                <Ripple />
                            </a>
                        </li> */}
                        <li>
                             {/* eslint-disable-next-line */}
                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span className="pi pi-sign-out mr-2"></span>
                                <span className="font-medium">Sign Out</span>
                                <Ripple />
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
                   
                </ul>
            </div>
        </div> 


        <div className="bg-green-700 shadow-2 flex relative lg:static justify-content-between z-0" style={{ minHeight: '50px' }}>
    <StyleClass nodeRef={btnRef28} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
         {/* eslint-disable-next-line */}
        <a ref={btnRef28} className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-0">
            <i className="pi pi-bars text-2xl"></i>
        </a>
    </StyleClass>
    <div className="hidden lg:flex absolute lg:static w-full bg-green-700 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li className="h-full">
                <Link to='/' className="p-ripple cursor-pointer h-full inline-flex align-items-center text-0 border-left-2 lg:border-left-none  lg:border-bottom-2 border-transparent hover:border-0 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-home mr-2"></span>
                    <span className="font-medium">Pending Requests</span>
                    <Ripple />
                </Link>
            </li>
            <li className="h-full">
                <Link to='/verified' className="p-ripple cursor-pointer h-full inline-flex align-items-center text-0 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-0 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-users mr-2"></span>
                    <span className="font-medium">Verified Requests</span>
                    <Ripple />
                </Link>
            </li>
            <li className="h-full">
                <Link  to='/flagged' className="p-ripple cursor-pointer h-full inline-flex align-items-center text-0 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-0 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span className="pi pi-calendar mr-2"></span>
                    <span className="font-medium">Flagged Requests</span>
                    <Ripple />
                </Link>
            </li>
           
        </ul>
    </div>
    <StyleClass nodeRef={btnRef29} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        {/* eslint-disable-next-line */}
        <a ref={btnRef29} className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-0">
            <i className="pi pi-ellipsis-v text-xl"></i>
        </a>
    </StyleClass>
    <div className="hidden lg:flex lg:justify-content-end absolute lg:static w-full bg-green-700 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li className="h-full">
                 {/* eslint-disable-next-line */}
                <a  className="p-ripple cursor-pointer h-full inline-flex align-items-center text-0 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span className=" mr-2 lg:mr-0">{new Date().toLocaleString()}</span>
                    {/* <span className="font-medium inline lg:hidden"></span> */}
                    <Ripple />
                </a>
                
            </li>
        
        </ul>
    </div>
</div>

        <div className="p-5 flex flex-column flex-auto">
            <div className=" surface-border border-round  flex-auto">
           

<Outlet/>

            </div>
        </div>
    </div>
  )
}

export default Home2