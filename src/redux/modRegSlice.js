import { createSlice } from "@reduxjs/toolkit";

export const modRegSlice = createSlice({
  name: "modReg",
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
   
      getModBirthRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getModBirthRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getModBirthRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getModBirthSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getModBirthSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getModBirthSingleRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },
      editModBirthRegStart: (state) => {
        return {
          ...state,
          isEditing: true,
        };
      },
      editModBirthRegSuccess: (state, action) => {
        return {
          ...state,
          isEditing: false,
          isEdited:true,
          // numPages:action.payload.pagination.total,
        };
      },
      editModeBirthRegFailure: (state) => {
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

 
export const {getModBirthRegFailure,getModBirthRegStart,getModBirthRegSuccess,changePage,handleChange,clearFilters,getModBirthSingleRegFailure,getModBirthSingleRegStart,getModBirthSingleRegSuccess,editModBirthRegFailure,editModBirthRegStart,editModBirthRegSuccess } = modRegSlice.actions;

export default modRegSlice.reducer;