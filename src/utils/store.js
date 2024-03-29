import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import themeSlice from "./themeSlice";

const appStore = configureStore({
       reducer : {
        app: appSliceReducer,
        search : searchSlice,
        chat: chatSlice,
        theme : themeSlice,
       }
})

export default appStore;