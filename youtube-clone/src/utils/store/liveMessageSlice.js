import { createSlice } from "@reduxjs/toolkit";
import { LIVE_MESSAGE_COUNT } from "../constants";

const liveMessageSlice = createSlice({
  name: "liveMessage",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(LIVE_MESSAGE_COUNT, 1);
      state.message.unshift(action.payload);
    },
    // addLiveComment: (state, action) => {},
  },
});

export default liveMessageSlice.reducer;
export const { addMessage } = liveMessageSlice.actions;
