// import { createSlice } from "@reduxjs/toolkit";
// import {fetchuser} from '../../actions/userActions'
// const loginSlice=createSlice({
//     name:"login",
//     initialState:{
//         loading:false,
//         isauthenticated:false
//     },

//     reducers:{
//         loginRequest(state,action){
//             return {
//                 ...state,
//                 loading:true
//             }
//         },
//         loginSuccess(state,action){
//             return{
//                 loading:false,
//                 isauthenticated:true,
//                 user:action.payload.user
//             }
//         },
//         loginFail(state,action){
//             return {
//                 loading:false,
//                 isauthenticated:false,
//                 error:action.payload
//             }
//         },
//         clearError(state,action){
//             return {
//               ...state,
//                 error:null
//             }
//         },  
//         registerRequest(state,action){
//             return {
//                 ...state,
//                 loading:true
//             }
//         },
//         registerSuccess(state,action){
//             return{
//                 loading:false,
//                 isauthenticated:true,
//                 user:action.payload
//             }
//         },
//         registerFail(state,action){
//             return {
//                 loading:false,
//                 isauthenticated:false,
//                 error:action.payload
//             }
//         },  
//         loadUserRequest(state,action){
//             return {
//                 ...state,
//                 loading:true,
//                 isauthenticated:false
//             }
//         },
//         loadUserSuccess(state,action){
//             return{
//                 loading:false,
//                 isauthenticated:true,
//                 user:action.payload
//             }
//         },
//         loadUserFail(state,action){
//             return {
//                 loading:false,
//                 isauthenticated:false,
//                 error:action.payload
//             }
//         }
//     }
// })

// const {reducer,actions}=loginSlice;

// export const {
    
//     loginFail,
//     loginSuccess,
//     loginRequest,
//     clearError,
//     registerFail,
//     registerRequest,
//     registerSuccess ,
//     loadUserRequest,
//     loadUserSuccess,
//     loadUserFail

// }=actions;

// export default reducer;



// // const checkeUser = createSlice({
// //     name: 'user',  // The name should be a string
// //     initialState: {
// //         status: 'init',
// //         loading: false,
// //         isauthenticated: false,
// //         user: null,  // Initialize user state
// //         error: null  // Initialize error state
// //     },
// //     reducers: {},
// //     extraReducers: (builder) => {
// //         builder
// //             .addCase(fetchuser.pending, (state) => {
// //                 state.status = 'loading';
// //                 state.loading = true;
// //             })
// //             .addCase(fetchuser.fulfilled, (state, action) => {
// //                 state.status = 'success';
// //                 state.loading = false;
// //                 state.isauthenticated = true;
// //                 state.user = action.payload;
// //             })
// //             .addCase(fetchuser.rejected, (state, action) => {
// //                 state.status = 'fail';
// //                 state.loading = false;
// //                 state.isauthenticated = false;
// //                 state.error = action.payload;
// //             });
// //     }
// // });

// // export const checkeUserReducer = checkeUser.reducer;




import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: true,
        isAuthenticated: false
    },
    reducers: {
        loginRequest(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action){
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        loginFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        clearError(state, action){
            return {
                ...state,
                error:  null
            }
        },
        registerRequest(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        registerSuccess(state, action){
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        registerFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        loadUserRequest(state, action){
            return {
                ...state,
                isAuthenticated: false,
                loading: true,
            }
        },
        loadUserSuccess(state, action){
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        loadUserFail(state, action){
            return {
                ...state,
                loading: false,
            }
        },
        logoutSuccess(state, action){
            return {
                loading: false,
                isAuthenticated: false,
            }
        },
        logoutFail(state, action){
            return {
                ...state,
                error:  action.payload
            }
        },
        updateProfileRequest(state, action){
            return {
                ...state,
                loading: true,
                isUpdated: false
            }
        },
        updateProfileSuccess(state, action){
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                isUpdated: true
            }
        },
        updateProfileFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        clearUpdateProfile(state, action){
            return {
                ...state,
                isUpdated: false
            }
        },

        updatePasswordRequest(state, action){
            return {
                ...state,
                loading: true,
                isUpdated: false
            }
        },
        updatePasswordSuccess(state, action){
            return {
                ...state,
                loading: false,
                isUpdated: true
            }
        },
        updatePasswordFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        forgotPasswordRequest(state, action){
            return {
                ...state,
                loading: true,
                message: null
            }
        },
        forgotPasswordSuccess(state, action){
            return {
                ...state,
                loading: false,
                message: action.payload.message
            }
        },
        forgotPasswordFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        resetPasswordRequest(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        resetPasswordSuccess(state, action){
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.user
            }
        },
        resetPasswordFail(state, action){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        
    }
});

const { actions, reducer } = authSlice;

export const { 
    loginRequest, 
    loginSuccess, 
    loginFail, 
    clearError,
    registerRequest,
    registerSuccess,
    registerFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutFail,
    logoutSuccess,
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    clearUpdateProfile,
    updatePasswordFail,
    updatePasswordSuccess,
    updatePasswordRequest,
    forgotPasswordFail,
    forgotPasswordSuccess,
    forgotPasswordRequest,
    resetPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    
 } = actions;

export default reducer;