import { logout } from "./userSlice";

export const logoutUser = (dispatch) => {
    dispatch(logout());
    removeUserFromLocalStorage();
  };
  
  export const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user-birth", JSON.stringify(user));
    localStorage.setItem("token-birth", token);
    
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token-birth");
    localStorage.removeItem("user-birth");
  };