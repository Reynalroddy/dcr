import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import birthReducer from "./birthSlice";
import deathReducer from "./deathSlice"
import attestReducer from "./attestSlice"
import modAttestReducer from "./modAttestSlice"
import modRegReducer from "./modRegSlice"
import modDeathReducer from "./modDeathSlice"
import userReducer  from "./userSlice";
export default configureStore({
  reducer: {
    header: headerReducer,
    birth:birthReducer,
    death:deathReducer,
    attest:attestReducer,
    modAttest:modAttestReducer,
    modReg:modRegReducer,
    user:userReducer,
    modDeath:modDeathReducer,
    },
});
