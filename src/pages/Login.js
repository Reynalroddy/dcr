
import React, {useEffect } from 'react';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { Checkbox } from 'primereact/checkbox';
// import { Divider } from 'primereact/divider';
// import { Carousel } from 'primereact/carousel';
// import { Ripple } from 'primereact/ripple';
// import Logo from '../assets/images/72.png'
// import Ban  from "../assets/images/bgLogin.jpg"
// import { useDispatch, useSelector } from "react-redux";

// import { toast } from "react-toastify";
// import {  loginUser } from "../redux/apiCalls";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProgressSpinner } from 'primereact/progressspinner';
const Login = () => {
    // const [checked2, setChecked2] = useState(false);

      const [searchParams] = useSearchParams();
      const nav= useNavigate()
      const toks = searchParams.get('t'); // 10
      
          useEffect(() => {
      function parseJwt (toks) {
          var base64Url = toks.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
      
          // console.log(JSON.parse(jsonPayload));
          localStorage.setItem('user-birth',jsonPayload)
          localStorage.setItem('token-birth',toks)
      nav('/')
      }
      parseJwt(toks);
          }, [toks,nav])
  return (
   
    <div className="min-h-screen flex justify-content-center align-items-centeer surface-section">

<ProgressSpinner />
       
      
    </div>
       
  )
}

export default Login