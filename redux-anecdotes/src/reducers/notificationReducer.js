import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => action.payload,
    clearNotification: () => "",
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const setNotificationWithTimeout = (message, time) => {
  return (dispatch) => {
    dispatch(setNotification(message));
    setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

export default notificationSlice.reducer;
