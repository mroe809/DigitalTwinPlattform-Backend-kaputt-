import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import dTProcess from "./slices/processSlice";
import { axiosMiddleware } from "./api/middleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notification: notificationReducer,
    dTProcess: dTProcess,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(axiosMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;