import { createSlice } from "@reduxjs/toolkit";

export const modDeathSlice = createSlice({
  name: "modDeath",
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
   
      getModDeathRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getModDeathRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getModDeathRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getModDeathSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getModDeathSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getModDeathSingleRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      editModDeathRegStart: (state) => {
        return {
          ...state,
          isEditing: true,
        };
      },
      editModDeathRegSuccess: (state, action) => {
        return {
          ...state,
          isEditing: false,
          isEdited:true,
          // numPages:action.payload.pagination.total,
        };
      },
      editModeDeathRegFailure: (state) => {
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

 
export const {getModDeathRegFailure,getModDeathRegStart,getModDeathRegSuccess,changePage,handleChange,clearFilters,getModDeathSingleRegFailure,getModDeathSingleRegStart,getModDeathSingleRegSuccess,editModDeathRegFailure,editModDeathRegStart,editModDeathRegSuccess } = modDeathSlice.actions;

export default modDeathSlice.reducer;