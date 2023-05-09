import { createSlice } from "@reduxjs/toolkit";

export const attestSlice = createSlice({
  name: "attest",
  initialState: {
    registerations:[],
    reg:{},
isLoading:false,
search: "",
    result_per_page: 20,
    page: 1,
    numPages:1,
    type: "pending",
    isEditing:false,
    isEdited:false,
  },

  reducers: {
   
      getAttestRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getAttestRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getAttestSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getAttestSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getAttestSingleRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      editRegStart: (state) => {
        return {
          ...state,
          isEditing: true,
        };
      },
      editRegSuccess: (state, action) => {
        return {
          ...state,
          isEditing: false,
          isEdited:true,
          // numPages:action.payload.pagination.total,
        };
      },
      editRegFailure: (state) => {
        return {
          ...state,
          isEditing: false,
          isEdited:false,
        };
      },
      changePage: (state, action) => {
        return {
          ...state,
          page: action.payload,
        };
      },
      handleChange: (state, action) => {
        return {
          ...state,
          page: 1,
          [action.payload.name]: action.payload.value,
        };
      },
      clearFilters: (state) => {
        const init = {
          search: "",
          result_per_page: 20,
          page: 1,
          type:"pending"
        };
        return {
          ...state,
          ...init,
        };
      },

  },
});

export const {getAttestRegFailure,getAttestRegStart,getAttestRegSuccess,changePage,handleChange,clearFilters,getAttestSingleRegFailure,getAttestSingleRegStart,getAttestSingleRegSuccess,editRegFailure,editRegStart,editRegSuccess } = attestSlice.actions;

export default attestSlice.reducer;