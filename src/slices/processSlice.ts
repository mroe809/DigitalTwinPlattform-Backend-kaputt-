import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";
import { showNotification, NotificationType } from "./notificationSlice";

type Process = {
  processname: string;
  companyId: string;
  materialId: string;
  postProcessingId: string;
  materialDescription: string;
  postProcessingDescription: string;
  comment: string;
  formData: FormData;
}

type ProcessStatusData = {
  processId: string;
}

type AuthApiState = {
    process?: Process | null;
    status: "idle" | "loading" | "failed";
    error: string | null;
    processes: Process[];
};

type ErrorResponse = {
  message: string;
};

const initialState: AuthApiState = {
  process: localStorage.getItem("process")
    ? JSON.parse(localStorage.getItem("process") as string)
    : null,
  status: "idle",
  error: null,
  processes: localStorage.getItem("processes")
    ? JSON.parse(localStorage.getItem("processes") as string)
    : null,
};

export const createProcess = createAsyncThunk(
  "createProcess",
  async (dTProcess: Process, { rejectWithValue }) => {
    try {
      //create process
      const response = await axiosInstance.post("/createProcess", dTProcess);
      const resData = response.data;

      localStorage.setItem("process", JSON.stringify(resData));

      //upload file
      try {
        const response = await axiosInstance.post('/upload', dTProcess.formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Upload erfolgreich:', response.data);
      } catch (error) {
        console.error('Fehler beim Upload:', error);
      }

      return resData;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

export const getProcessesbyCompanyId = createAsyncThunk(
    "getProcessesbyCompanyId",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.get("getProcessesForCompanyId");
        const resData = response.data;
  
        localStorage.setItem("processes", JSON.stringify(resData));
  
        return resData;
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          const errorResponse = error.response.data;
  
          return rejectWithValue(errorResponse);
        }
  
        throw error;
      }
    }
);
  
export const getProcessesForCustomer = createAsyncThunk(
  "getProcessesForCustomer",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("getProcessesForCustomer");
      const resData = response.data;

      localStorage.setItem("processes", JSON.stringify(resData));

      return resData;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

export const setNextProcessStatus = createAsyncThunk(
  "setProcessStatus",
  async (processStatusData: ProcessStatusData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("setNextProcessStatus", processStatusData);
      const resData = response.data;

      localStorage.setItem("todo", JSON.stringify(resData));

      return resData;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

export const setPreviousProcessStatus = createAsyncThunk(
  "setPreviousProcessStatus",
  async (processStatusData: ProcessStatusData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("setPreviousProcessStatus", processStatusData);
      const resData = response.data;

      localStorage.setItem("todo", JSON.stringify(resData));

      return resData;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

const processSlice = createSlice({
  name: "dTProcess",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProcess.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createProcess.fulfilled,
        (state, action: PayloadAction<Process>) => {
          state.status = "idle";
          state.process = action.payload;
      })
      .addCase(createProcess.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message || "Registration failed";
        } else {
          state.error = action.error.message || "Registration failed";
        }
      })
      .addCase(getProcessesbyCompanyId.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProcessesbyCompanyId.fulfilled,
        (state, action: PayloadAction<Process[]>) => {
          state.status = "idle";
          state.processes = action.payload;
      })
      .addCase(getProcessesbyCompanyId.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message ||
            "Retrieving processes failed";
        } else {
          state.error = action.error.message || "Retrieving processes failed";
        }
      })
      .addCase(getProcessesForCustomer.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProcessesForCustomer.fulfilled,
        (state, action: PayloadAction<Process[]>) => {
          state.status = "idle";
          state.processes = action.payload;
      })
      .addCase(getProcessesForCustomer.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message ||
            "Retrieving processes failed";
        } else {
          state.error = action.error.message || "Retrieving processes failed";
        }
      })
      .addCase(setNextProcessStatus.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(setNextProcessStatus.fulfilled,
        (state, action: PayloadAction<Process>) => {
          state.status = "idle";
          state.process = action.payload;
      })
      .addCase(setNextProcessStatus.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message || "Registration failed";
        } else {
          state.error = action.error.message || "Registration failed";
        }
      })
      .addCase(setPreviousProcessStatus.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(setPreviousProcessStatus.fulfilled,
        (state, action: PayloadAction<Process>) => {
          state.status = "idle";
          state.process = action.payload;
      })
      .addCase(setPreviousProcessStatus.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message || "Registration failed";
        } else {
          state.error = action.error.message || "Registration failed";
        }
      });
  },
});

export default processSlice.reducer;