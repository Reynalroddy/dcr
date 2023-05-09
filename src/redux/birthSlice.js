import { createSlice } from "@reduxjs/toolkit";

export const birthSlice = createSlice({
  name: "header",
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
    
      getRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          registerations: action.payload.result,
          numPages:action.payload.pagination.total,
        };
      },
      getRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
        };
      },

      getSingleRegStart: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      getSingleRegSuccess: (state, action) => {
        return {
          ...state,
          isLoading: false,
          reg: action.payload
          // numPages:action.payload.pagination.total,
        };
      },
      getSingleRegFailure: (state) => {
        return {
          ...state,
          isLoading: false,
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
      editBirthRegStart: (state) => {
        return {
          ...state,
          isEditing: true,
        };
      },
      editBirthRegSuccess: (state, action) => {
        return {
          ...state,
          isEditing: false,
          isEdited:true,
          // numPages:action.payload.pagination.total,
        };
      },
      editBirthRegFailure: (state) => {
        return {
          ...state,
          isEditing: false,
          isEdited:false,
        };
      },
      clearFilters: (state) => {
        const init = {
          search: "",
          result_per_page: 20,
          page: 1,
          type: "pending",
        };
        return {
          ...state,
          ...init,
        };
      },


  },
});

export const { getRegFailure,getRegStart,getRegSuccess,changePage,handleChange,clearFilters,getSingleRegFailure,getSingleRegStart,getSingleRegSuccess,editBirthRegFailure,editBirthRegStart,editBirthRegSuccess } = birthSlice.actions;

export default birthSlice.reducer;