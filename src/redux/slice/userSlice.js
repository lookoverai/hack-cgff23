import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' //next js redux toolkit  
import { getUserInfo } from "../api/auth.js";


export const userInfoAsync = createAsyncThunk( 
    'user/fetchUserInfo', 
    async () => { 
        const response = await getUserInfo(); 
        return response; 
    } 
); 

export const userSlice = createSlice({ 
    name: 'user', 
    initialState: { 
        user: null,
        authObject: null,
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(userInfoAsync.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.authObject = action.payload.authObject;
                state.status = 'success';
            })
            .addCase(userInfoAsync.rejected, (state, action) => {
                state.user ={};
                state.authObject = {};
                state.status = 'failed';
            })
            .addCase(userInfoAsync.pending, (state, action) => {
                state.user =null;
                state.authObject = null;
                state.status = 'loading...';
            })
    }
    
}) 


// case under reducers becomes an action 
// export const { increase, decrease } = counterSlice.actions 
export default userSlice.reducer 