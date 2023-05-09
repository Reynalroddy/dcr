import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("user-birth")
      ? JSON.parse(localStorage.getItem("user-birth"))
      : null,
    token: localStorage.getItem("token-birth"),
    isLoading: false,
  },

  reducers: {
    // registerStart: (state) => {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // },
    // registerSuccess: (state, action) => {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     token: action.payload.token,
    //     userInfo: action.payload.user,
    //     userLocation: action.payload.location,
    //     jobLocation: action.payload.location,
    //   };
    // },
    // registerFailure: (state) => {
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // },
    loginStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        token: action.payload.access_token,
        userInfo: action.payload.user,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },

    logout: (state) => {
      return {
        ...state,
        userInfo: null,
        token: null,
        isLoading: false,
        
      };
    },
    updateUserStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    updateUserSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        userInfo: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
      };
    },
    updateUserFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
