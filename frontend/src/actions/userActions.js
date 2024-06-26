// import { createAsyncThunk } from '@reduxjs/toolkit';
import {clearError, loadUserFail, loadUserRequest, loadUserSuccess, loginFail,loginRequest,loginSuccess, registerFail, registerRequest, registerSuccess} from '../components/slices/authSlice'
import axios from 'axios'

// export const fetchuser=createAsyncThunk('user/fetchuser',
//   async  ()=>{
//     try {
//         const {data} = await axios.get('/api/v1/profile');
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
//   }
// )




export const login = (email, password) => async (dispatch) => {

    try {
        dispatch(loginRequest())
        const { data }  = await axios.post(`/api/v1/login`,{email,password});
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }

}

export const clearAuthError = dispatch => {
dispatch(clearError())
}

export const register = (userData) => async (dispatch) => {

try {
    dispatch(registerRequest())
    const config = {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    }

    const { data }  = await axios.post(`/api/v1/register`,userData, config);
    dispatch(registerSuccess(data))
} catch (error) {
    dispatch(registerFail(error.response.data.message))
}

}

export const loadUser =  async (dispatch) => {

try {
    dispatch(loadUserRequest())
   

    const { data }  = await axios.get(`/api/v1/myprofile`);
    dispatch(loadUserSuccess(data))
} catch (error) {
    dispatch(loadUserFail(error.response.data.message))
}

}