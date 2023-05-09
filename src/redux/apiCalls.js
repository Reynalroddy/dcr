import authFetch from "../axios";
import { getRegFailure,getRegStart,getRegSuccess,getSingleRegFailure,getSingleRegStart,getSingleRegSuccess,editBirthRegFailure,editBirthRegStart,editBirthRegSuccess } from "./birthSlice";
import {getModDeathRegFailure,getModDeathRegStart,getModDeathRegSuccess,getModDeathSingleRegFailure,getModDeathSingleRegStart,getModDeathSingleRegSuccess,editModDeathRegFailure,editModDeathRegStart,editModDeathRegSuccess} from "./modDeathSlice";
import {editDeathRegFailure,editDeathRegStart,editDeathRegSuccess,getSingleDeathRegFailure,getSingleDeathRegStart,getSingleDeathRegSuccess,getDeathRegStart,getDeathRegFailure,getDeathRegSuccess } from "./deathSlice"
import { editRegFailure, editRegStart, editRegSuccess, getAttestRegFailure,getAttestRegStart,getAttestRegSuccess,getAttestSingleRegFailure,getAttestSingleRegStart,getAttestSingleRegSuccess} from "./attestSlice";
import {getModAttestRegFailure,getModAttestRegStart,getModAttestRegSuccess,getModAttestSingleRegFailure,getModAttestSingleRegStart,getModAttestSingleRegSuccess,editModRegFailure,editModRegStart,editModRegSuccess } from "./modAttestSlice";
import {getModBirthRegFailure,getModBirthRegStart,getModBirthRegSuccess,getModBirthSingleRegFailure,getModBirthSingleRegStart,getModBirthSingleRegSuccess,editModBirthRegFailure,editModBirthRegStart,editModBirthRegSuccess} from "./modRegSlice"

// import { dataOptions } from "../utils";
import { loginStart,loginFailure,loginSuccess } from "./userSlice";
import { toast } from "react-toastify";
import { addUserToLocalStorage } from "./functions";
// import toast
          



// birth all
export const getBirthRegz=async(dispatch,
  search,
  result_per_page,
  page,
  type
  )=>{
  dispatch(getRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          type: type
  }
  try {
    const res = await authFetch.get(`dcr/registrations/birth/`,{
      params: data
    });


    dispatch(getRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getRegFailure());
  console.log(error)
  }
 

}


// single birth

export const getSingleBirthRegs=async(dispatch,id)=>{
  dispatch(getSingleRegStart());
  try {
    const res = await authFetch.get(`dcr/registrations/birth/${id}`);
    dispatch(getSingleRegSuccess(res.data));
    // console.log(res.data)
  } catch (error) {

    dispatch(getSingleRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}






// death all
export const getDeathRegz=async(dispatch,
  search,
  result_per_page,
  page,
  type
  )=>{
  dispatch(getDeathRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          type: type
  }
  try {
    const res = await authFetch.get(`dcr/registrations/death/`,{
      params: data
    });


    dispatch(getDeathRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getDeathRegFailure());
  console.log(error)
  }
 

}


// single death

export const getSingleDeathRegs=async(dispatch,id)=>{
  dispatch(getSingleDeathRegStart());
  try {
    const res = await authFetch.get(`dcr/registrations/death/${id}`);
    dispatch(getSingleDeathRegSuccess(res.data));
    // console.log(res.data)
  } catch (error) {

    dispatch(getSingleDeathRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}


// attestation all
export const getAttestRegz=async(dispatch,
  search,
  result_per_page,
  page,
  type
  )=>{
  dispatch(getAttestRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          type: type
  }
  try {
    const res = await authFetch.get(`state-director/birth-attestation/`,{
      params: data
    });


    dispatch(getAttestRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getAttestRegFailure());
  console.log(error)
  }
 

}



// approve attestation

export const editz=async(id,dispatch
  )=>{
  dispatch(editRegStart());


  try {
    const res = await authFetch.patch(`state-director/birth-attestation/approve/${id}/`);
    console.log(res.data)
   
    dispatch(editRegSuccess());
    toast.success("Attestation Approved", {
      position: "top-left",
    });
    // console.log(res.data)
  } catch (error) {
    dispatch(editRegFailure());
    toast.error("Approval failed.please retry", {
      position: "top-left",
    });
  console.log(error)
  }
 

}








// single attestation

export const getRegs=async(dispatch,id)=>{
  dispatch(getAttestSingleRegStart());
  try {
    const res = await authFetch.get(`state-director/birth-attestation/${id}`);
    dispatch(getAttestSingleRegSuccess(res.data.data));
    // console.log(res.data.data)
  } catch (error) {

    dispatch(getAttestSingleRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}




           
   
      // list attest modifications

export const getModAttestRegz=async(dispatch,
  search, 
  result_per_page,
  page,
  type
  )=>{
  dispatch(getModAttestRegStart());

  const data = {
          search: search,
          result_per_page: result_per_page,
          page:  page,
          type: type
  }
  try {
    const res = await authFetch.get(`state-director/modification/birth-attestation/`,{
      params: data
    });


    dispatch(getModAttestRegSuccess(res.data));
    console.log(res.data)
  } catch (error) {
    dispatch(getModAttestRegFailure());
  console.log(error)
  }
 

}

// edit single attest-mod

export const editModAttest=async(id,dispatch
  )=>{
  dispatch(editModRegStart());


  try {
    const res = await authFetch.patch(`state-director/birth-attestation/approve/${id}/`);
    console.log(res.data)
    dispatch(editModRegSuccess());
    toast.success("Attestation Approved", {
      position: "top-left",
    });
    // console.log(res.data)
  } catch (error) {
    dispatch(editModRegFailure());
    toast.error("Attestation not Approved.retry", {
      position: "top-left",
    });
  console.log(error)
  }
}









// single attest-mod

export const getModsSingleAttestRegs=async(dispatch,id)=>{
  dispatch(getModAttestSingleRegStart());
  
  try {
    const res = await authFetch.get(`state-director/modification/birth-attestation/single/${id}`);
    dispatch(getModAttestSingleRegSuccess(res.data.data));
    // console.log(res.data.data)
  } catch (error) {

    dispatch(getModAttestSingleRegFailure());
  console.log(error)
  }
  // clearAlert(dispatch);

}








      // list birth modifications

      export const getModBirthRegz=async(dispatch,
        search, 
        result_per_page,
        page,
        type
        )=>{
        dispatch(getModBirthRegStart());
      
        const data = {
                search: search,
                result_per_page: result_per_page,
                page:  page,
                type: type
        }
        try {
          const res = await authFetch.get(`state-director/modification/birth-registration/`,{
            params: data
          });
      
       
      
          dispatch(getModBirthRegSuccess(res.data));
          console.log(res.data)
        } catch (error) {
          dispatch(getModBirthRegFailure());
        console.log(error)
        }
       
      
      }




      export const getModDeathRegz=async(dispatch,
        search, 
        result_per_page,
        page,
        type
        )=>{
        dispatch(getModDeathRegStart());
      
        const data = {
                search: search,
                result_per_page: result_per_page,
                page:  page,
                type: type
        }
        try {
          const res = await authFetch.get(`state-director/modification/death-registration/`,{
            params: data
          });
      
       
      
          dispatch(getModDeathRegSuccess(res.data));
          console.log(res.data)
        } catch (error) {
          dispatch(getModDeathRegFailure());
        console.log(error)
        }
       
      
      }
      
      // edit single birth-mod
      
      export const editModBirth=async(id,dispatch
        )=>{
        dispatch(editModBirthRegStart());
      
        // state-director/modification/birth-registration/approve/2

        try {
          const res = await authFetch.patch(`state-director/modification/birth-registration/approve/${id}/`);
          console.log(res.data)
          dispatch(editModBirthRegSuccess());
          toast.success("Attestation Approved", {
            position: "top-left",
          });
          // console.log(res.data)
        } catch (error) {
          dispatch(editModBirthRegFailure());
          toast.error("Attestation not Approved.retry", {
            position: "top-left",
          });
        console.log(error)
        }
      }

      export const editModDeath=async(id,dispatch
        )=>{
        dispatch(editModDeathRegStart());
      
        // state-director/modification/birth-registration/approve/2

        try {
          const res = await authFetch.patch(`state-director/modification/birth-registration/approve/${id}/`);
          console.log(res.data)
          dispatch(editModDeathRegSuccess());
          toast.success("registration Approved", {
            position: "top-left",
          });
          // console.log(res.data)
        } catch (error) {
          dispatch(editModDeathRegFailure());
          toast.error("registration not Approved.retry", {
            position: "top-left",
          });
        console.log(error)
        }
      }

      export const editBirthReg=async(id,value,dispatch
        )=>{
        dispatch(editBirthRegStart());
      


        // state-director/modification/birth-registration/approve/2

        try {
          // eslint-disable-next-line
          const res = await authFetch.post(`dcr/registrations/birth/reject`,{
            
              id: parseInt(id),
              reason: value
          
          });
          console.log(res.data);
          dispatch(editBirthRegSuccess());
          toast.success("Registration queried", {
            position: "top-left",
          });
          // console.log(res.data)
        } catch (error) {
          dispatch(editBirthRegFailure());
          toast.error("Registration not queried.retry", {
            position: "top-left",
          });
        console.log(error)
        }
      }
      
      
      
      
      
      
      
      
      
      // single birth-mod
      
      export const getModsSingleBirthRegs=async(dispatch,id)=>{
        dispatch(getModBirthSingleRegStart());
        
        try {
          // state-director/modification/birth-registration/single/1
          const res = await authFetch.get(`state-director/modification/birth-registration/single/${id}`);
          dispatch(getModBirthSingleRegSuccess(res.data.data));
          // console.log(res.data.data)
        } catch (error) {
      
          dispatch(getModBirthSingleRegFailure());
        console.log(error)
        }
        // clearAlert(dispatch);
      
      }

      export const getModsSingleDeathRegs=async(dispatch,id)=>{
        dispatch(getModDeathSingleRegStart());
        
        try {
          // state-director/modification/birth-registration/single/1
          const res = await authFetch.get(`state-director/modification/death-registration/single/${id}`);
          dispatch(getModDeathSingleRegSuccess(res.data.data));
          // console.log(res.data.data)
        } catch (error) {
      
          dispatch(getModDeathSingleRegFailure());
        console.log(error)
        }
        // clearAlert(dispatch);
      
      }
      


      export const loginUser = async (currentUser, dispatch) => {
        dispatch(loginStart());
        try {
          const res = await authFetch.post("auth/login", currentUser);
          const { user, access_token } = res.data;
          console.log(user,access_token
            )
          dispatch(loginSuccess(res.data));
          toast.success("user logged in successfully..redirecting..", {
            position: "top-left",
          });
          addUserToLocalStorage({ user, token:access_token });
        } catch (error) {
          // console.log(error.response.data.msg);
          dispatch(loginFailure());
          toast.error(`${error.response.data.message}`, {
            position: "top-left",
          });
        }
        // clearAlert(dispatch);
      };




      export const editDeathReg=async(id,dispatch
        )=>{
        dispatch(editDeathRegStart());
        // state-director/modification/birth-registration/approve/2

        try {
          // eslint-disable-next-line
          const res = await authFetch.get(`dcr/registrations/death/approve/${id}/`);
          // console.log(res.data)
          dispatch(editDeathRegSuccess());
          toast.success("Registration Approved", {
            position: "top-left",
          });
          // console.log(res.data)
        } catch (error) {
          dispatch(editDeathRegFailure());
          toast.error("Registration not Approved.retry", {
            position: "top-left",
          });
        console.log(error)
        }
      }