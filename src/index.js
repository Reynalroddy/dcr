import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import 'sweetalert2/dist/sweetalert2.min.css'
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
