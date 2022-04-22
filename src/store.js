import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Redux/redux.js";

export default configureStore({
    reducer:{
        auth: authReducer,
    }

}); 