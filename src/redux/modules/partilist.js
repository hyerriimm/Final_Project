import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const API_URL = 'http://13.125.229.126:8080';

//참여 중인 모임 조회
export const __parti = createAsyncThunk(
    "/mypage/participation", 
    async (payload, thunkAPI) => { 
        try {
            const data = await axios.get(`${API_URL}/mypage/participation`, {
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


export const partilist = createSlice({
    name: "partilist",
    initialState: {
      partilist: [],
      error: null,
      isloading: false 
    },
    reducers: {},
    extraReducers: {
        [__parti.pending]: (state) => {
          state.isLoading = true;
        },
        [__parti.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.cardlist = action.payload; 
        }, 
        [__parti.rejected]: (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
  },
}
);

export const {} = partilist.actions;
export default partilist.reducer;