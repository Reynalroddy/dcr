import { createSlice } from "@reduxjs/toolkit";

export const modAttestSlice = createSlice({
  name: "modAttest",
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
   
      getModAttestRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getModAttestRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getModAttestRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getModAttestSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getModAttestSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getModAttestSingleRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      editModRegStart: (state) => {
        return {
          ...state,
          isEditing: true,
        };
      },
      editModRegSuccess: (state, action) => {
        return {
          ...state,
          isEditing: false,
          isEdited:true,
          // numPages:action.payload.pagination.total,
        };
      },
      editModeRegFailure: (state) => {
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

 
export const {getModAttestRegFailure,getModAttestRegStart,getModAttestRegSuccess,changePage,handleChange,clearFilters,getModAttestSingleRegFailure,getModAttestSingleRegStart,getModAttestSingleRegSuccess,editModRegFailure,editModRegStart,editModRegSuccess } = modAttestSlice.actions;

export default modAttestSlice.reducer;