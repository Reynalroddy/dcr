import { createSlice } from "@reduxjs/toolkit";

export const deathSlice = createSlice({
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
    getDeathRegStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getDeathRegSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        registerations: action.payload.result,
        numPages:action.payload.pagination.total,
      };
    },
    getDeathRegFailure: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },

    getSingleDeathRegStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    getSingleDeathRegSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        reg: action.payload
        // numPages:action.payload.pagination.total,
      };
    },
    getSingleDeathRegFailure: (state) => {
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
    editDeathRegStart: (state) => {
      return {
        ...state,
        isEditing: true,
      };
    },
    editDeathRegSuccess: (state, action) => {
      return {
        ...state,
        isEditing: false,
        isEdited:true,
        // numPages:action.payload.pagination.total,
      };
    },
    editDeathRegFailure: (state) => {
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
        type:'pending'
       
      };
      return {
        ...state,
        ...init,
      };
    },
  },
});

export const { editDeathRegFailure,editDeathRegStart,editDeathRegSuccess,getSingleDeathRegFailure,getSingleDeathRegStart,getSingleDeathRegSuccess,getDeathRegStart,getDeathRegFailure,getDeathRegSuccess,changePage,clearFilters,handleChange } = deathSlice.actions;

export default deathSlice.reducer;