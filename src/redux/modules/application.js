import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// 지원자 리스트 정보 가져오기
export const __getApplication = createAsyncThunk(
    "application/__getApplication", 
    async (payload, thunkAPI) => { 
        try {
            const data = await axios.get(`http://13.125.229.126:8080/post/application/${payload}`, {
            headers: {
                authorization: localStorage.getItem("ACCESSTOKEN"),
                refreshtoken: localStorage.getItem("REFRESHTOKEN")
            }
            });
        return thunkAPI.fulfillWithValue(data.data.data);
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    });

// 거절하기
export const __refuse = createAsyncThunk(
    "application/__refuse", 
    async (payload, thunkAPI) => { 
        try {
            const data = await axios.post(`http://13.125.229.126:8080/post/application/disapprove/${payload}`, {applicationId: payload}, {
            headers: {
                authorization: localStorage.getItem("ACCESSTOKEN"),
                refreshtoken: localStorage.getItem("REFRESHTOKEN")
            }
            });
        console.log(data);
        if(data.data.success === false) {
            alert(data.data.error.message)
        }
        else {
            alert(data.data.data);
            window.location.reload();
        }
        return thunkAPI.fulfillWithValue(data.data.data);
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    });

// 수락하기
export const __accept = createAsyncThunk(
    "application/__accept", 
    async (payload, thunkAPI) => { 
        try {
            const data = await axios.post(`http://13.125.229.126:8080/post/application/approve/${payload}`, {applicationId: payload}, {
            headers: {
                authorization: localStorage.getItem("ACCESSTOKEN"),
                refreshtoken: localStorage.getItem("REFRESHTOKEN")
            }
            });
        console.log(data);
        if(data.data.success === false) {
            alert(data.data.error.message)
        }
        else {
            alert(data.data.data);
            window.location.reload();
        }
        return thunkAPI.fulfillWithValue(data.data.data);
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    });

export const application = createSlice({
  name: 'application',
  initialState: {
    applicants:[],
    detailTitle: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {

    builder
    .addCase(__getApplication.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(__getApplication.fulfilled, (state, action) => {
      state.isLoading = false;
      state.applicants = action.payload.applicants;
      state.detailTitle = action.payload.title;
    })
    .addCase(__getApplication.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    });
  },
});

// export const {} = application.actions;
export default application.reducer;