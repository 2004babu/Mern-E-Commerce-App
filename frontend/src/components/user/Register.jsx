// import React, { Fragment, useEffect, useState } from 'react'
// import MetaData from '../layouts/MetaData'
// import {useDispatch, useSelector}from 'react-redux'
// import {useNavigate}from 'react-router-dom'
// import {clearAuthError, register} from '../../actions/userActions'
// import {toast}from 'react-toastify'

// const Register = () => {

//     const [userData,setUserData]=useState({
//       name:"",
//         email:"",
//         password:""
//     })
   
//     const [avatar,setAvatar]=useState('')
//     const [previewAvatar,setPreviewAvatar]=useState("./images/profile.jpg")
//     const dispatch=useDispatch();
//     const navigate=useNavigate();




// const { isAuthenticated, error, loading } = useSelector((state) => state.authState);
// console.log(loading);
// useEffect(() => {
//   if (isAuthenticated) {
//     navigate('/'); // Redirect to home or any other page
//   }
//   if(error){
//     toast(error,{
//       type:'error',
//       onOpen:()=>{
//         dispatch(clearAuthError)
//       }
//     })
//   }
// }, [isAuthenticated, navigate,error]);


//     const submithandler= (e)=>{
//       e.preventDefault()
//       const formdata= new FormData();
//       formdata.append('name',userData.name)
//       formdata.append('email',userData.email)
//       formdata.append('password',userData.password)
//       formdata.append('avatar',avatar)
//       dispatch(register(formdata))
//     }

//     const onChangeEvevt=async(e)=>{
//         if(e.target.name==='avatar'){
//             const reader= await new FileReader()

            
//           reader.onload =async()=>{
//                 if (reader.readyState===2) {
//                     setPreviewAvatar(reader.result)
//                     setAvatar(e.target.files[0])
//                 }
//             }
//             reader.readAsDataURL(e.target.files[0])

//         }else{
//             setUserData({...userData,[e.target.name]:e.target.value})
//         }
//     }

    
//   return (
//     <Fragment>
//       <MetaData Title={"Register"}/>
//       <div className="row wrapper">
//     <div className="col-10 col-lg-5">
//     <form onSubmit={submithandler} className="shadow-lg" encType='multipart/form-data'>
//         <h1 className="mb-3">Register</h1>

//       <div className="form-group">
//         <label htmlFor="email_field">Name</label>
//         <input type="name" id="name_field" name='name' className="form-control" 
//   onChange={onChangeEvevt}/>
//       </div>

//         <div className="form-group">
//           <label htmlFor="email_field">Email</label>
//           <input
//             type="email"
//                 name='email' onChange={onChangeEvevt}
//             id="email_field"
//             className="form-control"
            
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password_field">Password</label>
//           <input
//             type="password"
//             name='password' onChange={onChangeEvevt}
//             id="password_field"
//             className="form-control"
           
//           />
//         </div>

//         <div className='form-group'>
//           <label htmlFor='avatar_upload'>Avatar</label>
//           <div className='d-flex align-items-center'>
//               <div>
//                   <figure className='avatar mr-3 item-rtl'>
//                       <img
//                         //   src="./images/profile.jpg"
//                         src={previewAvatar}
//                           className='rounded-circle'
//                           alt='profile-photo'
//                       />
//                   </figure>
//               </div>
//               <div className='custom-file'>
//                   <input
//                 onChange={onChangeEvevt}
//                       type='file'
//                       name='avatar'
//                       className='custom-file-input'
//                       id='customFile'
                      
//                   />
//                   <label className='custom-file-label' htmlFor='customFile'>
//                       Choose Avatar
//                   </label>
//               </div>
//           </div>
//       </div>

//         <button
//           id="register_button"
//           type="submit"
//           className="btn btn-block py-3"
//           disabled={loading}
//         >
//           REGISTER
//         </button>
//       </form>
//       </div>
// </div>
//     </Fragment>
    
//   )
// }

// export default Register

import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { register, clearAuthError } from '../../actions/userActions'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const onChange = (e) => {
        if(e.target.name === 'avatar') {
           const reader = new FileReader();
           reader.onload = () => {
                if(reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0])
                }
           }


           reader.readAsDataURL(e.target.files[0])
        }else{
            setUserData({...userData, [e.target.name]:e.target.value })
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = await new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('password', userData.password)
        formData.append('avatar', avatar);
        dispatch(register(formData))
    }

    useEffect(()=>{
        if(isAuthenticated) {
            navigate('/');
            return
        }
        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[error, isAuthenticated, dispatch, navigate])

    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
                <h1 className="mb-3">Register</h1>

            <div className="form-group">
                <label htmlFor="email_field">Name</label>
                <input name='name' onChange={onChange} type="name" id="name_field" className="form-control" />
            </div>

                <div className="form-group">
                <label htmlFor="email_field">Email</label>
                <input
                    type="email"
                    id="email_field"
                    name='email' 
                    onChange={onChange}
                    className="form-control"
                  
                />
                </div>
    
                <div className="form-group">
                <label htmlFor="password_field">Password</label>
                <input
                    name='password' 
                    onChange={onChange}
                    type="password"
                    id="password_field"
                    className="form-control"
                  
                />
                </div>

                <div className='form-group'>
                <label htmlFor='avatar_upload'>Avatar</label>
                <div className='d-flex align-items-center'>
                    <div>
                        <figure className='avatar mr-3 item-rtl'>
                            <img
                                src={avatarPreview}
                                className='rounded-circle'
                                alt='Avatar'
                            />
                        </figure>
                    </div>
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='avatar'
                            onChange={onChange}
                            className='custom-file-input'
                            id='customFile'
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            Choose Avatar
                        </label>
                    </div>
                </div>
            </div>
    
                <button
                id="register_button"
                type="submit"
                className="btn btn-block py-3"
                disabled={loading}
                >
                REGISTER
                </button>
            </form>
            </div>
        </div>
    )
}