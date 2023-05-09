import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';

import Login from "./pages/Login";
import SingleApplication from "./pages/SingleApplication";
import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
// import ProtectedRouteAdmin2 from "./pages/ProtectedRouteAdmin2";
import ProtectedRouteAdmin3 from "./pages/ProtectedRouteAdmin3";
import Homez from "./components/Homez";
// import AdminFlagged from "./pages/AdminFlagged";

// import BirthReport from "./pages/BirthReport";
// import CertPending from "./pages/CertPending";

// import PendingHospital from "./pages/PendingHospital"
// import SingleHospital from "./pages/SingleHospital";
// import PublicHos from "./pages/PublicHos";
import PrivateHos from "./pages/Private";
// import Registrars from "./pages/Registrars";
import RegList from "./pages/RegistrarsList";
import SingleRegistrars from "./pages/Single-registrars";
// import NewReg from "./pages/NewReg";
// import PendingCert from "./pages/PendingCert";
       
// import Still from "./pages/Still";
// import ProtectedRoute from "./pages/ProtectedRoute";
import { ToastContainer } from "react-toastify";
// import SingleApplication2 from "./pages/SingleApplication2";
// import ModifyReg from "./pages/Modify-reg";
import ModifyAttest from "./pages/ModifyAttest";
// import Death from "./pages/Death";
import SingleModifiedAttestation from "./pages/SingleModifiedAttestation";
import ModifyBirth from "./pages/ModifyBirth";
import SingleModifiedBirth from "./pages/SingleModifiedBirth";
// import { useSelector } from "react-redux";
import AdminVerified from "./pages/AdminVerified";
import SingleBirth from "./pages/SingleBirth";
import AdminVerifiedDeath from "./pages/AdminVerifiedDeath";
import SingleApplication2 from "./pages/SingleApplication2";
import AdminVerifiedReg from "./pages/AdminVerifiedReg";
import Still from "./pages/Still";
import SingleStill from "./pages/SingleStill";
import ModifyDeath from "./pages/ModifyDeath";
import SingleModifiedDeath from "./pages/SingleModifiedDeath";
import {AttestRoute,BirthRegRoute,DeathRegRoute,StillRegRoute,ModRegRoute} from "./components/protectedRoutes/AttestRoute";
import Unauthorized from "./pages/Unauthorized";
const App = () => {
  // const { userInfo } = useSelector((state) => state.user);
  return (
    <Router>
       <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteAdmin>
              <Homez />
             </ProtectedRouteAdmin>
          }
        >
         
          <Route index element={<AttestRoute>
            <PrivateHos/>
          </AttestRoute>
          } />
           {/* <Route path='admin-flagged' element={<AdminFlagged/>}/>
          
           <Route path='birth-report' element={<BirthReport/>}/> */}
        {/* state director */}
           <Route path='modify-birth' element={
          <ModRegRoute>

<ModifyBirth/>
          </ModRegRoute>
          }/>
            <Route path='modify-death' element={ <ModRegRoute>
            <ModifyDeath/>
            </ModRegRoute>}/>
           <Route path='modify-attest' element={<ModRegRoute>
            <ModifyAttest/>
            </ModRegRoute>}/>
            <Route path='single-attest/:id' element={ <ModRegRoute>
              <SingleModifiedAttestation/>
              </ModRegRoute>} />
           <Route path='single-birth/:id' element={ <ModRegRoute>

            <SingleModifiedBirth/>
           </ModRegRoute>
            } />
            <Route path='single-death/:id' element={<ModRegRoute>
            <SingleModifiedDeath/>
           </ModRegRoute>} />
            <Route path='single/:id' element={ <ModRegRoute>
              <SingleApplication/>
             </ModRegRoute>} />
            {/* end of state director.. */}


            {/* DCR */}

            <Route path='birth' element={ <BirthRegRoute>
              <AdminVerified/>
              </BirthRegRoute>} />  

              <Route path='singleBirth/:id' element={<BirthRegRoute>
                <SingleBirth/>
                </BirthRegRoute>}/>

                <Route path='still' element={<StillRegRoute>
                  <Still/>
                </StillRegRoute>}/>

                <Route path='still/:id' element={<StillRegRoute>
                <SingleStill/>
                </StillRegRoute>}/>

                <Route path='death' element={<DeathRegRoute>

                  <AdminVerifiedDeath/>
                </DeathRegRoute>} />  
              <Route path='registrars' element={
              <AdminVerifiedReg/>
            } />  

              <Route path='singleDeath/:id' element={<DeathRegRoute>
             
                <SingleApplication2/>
                </DeathRegRoute>}/>

                <Route path='single-registrars/:id' element={
                    <ProtectedRouteAdmin3>

<SingleRegistrars/>
                    </ProtectedRouteAdmin3>
                 
                 } />


          
           
           {/* <Route path='registrars' element={<Registrars/>} /> */}
           <Route path='registrars-list/:id' element={
          <ProtectedRouteAdmin3>
   <RegList/>
          </ProtectedRouteAdmin3>
       

           } />
           {/* <Route path='registrars-new' element={<NewReg/>} />
           <Route path='pending-cert' element={<PendingCert/>} /> */}
           {/* <Route path='single/:id' element={<SingleApplication/>} /> */}
          {/* <Route path='single' element={<SingleApplication/>} /> */}
        </Route>
        <Route path='login' element={<Login/>} />
        <Route path='unauth' element={<Unauthorized/>} />
      </Routes>
    </Router>


  );
};

export default App;
