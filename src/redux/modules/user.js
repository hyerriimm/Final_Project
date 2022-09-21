import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { createSlice } from "@reduxjs/toolkit";

const API_URL = 'http://13.125.229.126';

//회원가입
export const signUp = createAsyncThunk(
    "member/signup", 
    async (payload, thunkAPI) => { 
        try {
            console.log(payload)
            const data = await axios.post(`${API_URL}/member/signup`, payload)
            console.log(data.data)
            if(data.data.success === false)
              alert(data.data.error.message)
              else alert(data.data.data)
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      });


export const user = createSlice({
    name: "user",
    initialState: {
      data: [],
      success: false,
      error: null,
      isloading: false 
    },
    reducers: {  
  
    }
}
);

export default user.reducer;