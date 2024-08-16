import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import searchSlice from "./searchSlice";
import liveMessageSlice from "./liveMessageSlice";

const appStore = configureStore({
  reducer: {
    config: configSlice,
    search: searchSlice,
    liveMessage: liveMessageSlice,
  },
});

export default appStore;
