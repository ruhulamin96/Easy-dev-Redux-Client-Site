import React from 'react'
import NavBar from '../Shared/NavBar/NavBar'
import Header from '../../Components/Home/Header/Header'
import Courses from './Courses/Courses'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateProfileInfo } from '../../Redux/authSlice'
import { useEffect } from 'react'

function Home() {
    const isAuthenticated=useSelector(state=>state.auth.isAuthenticated)
    const Dispatch=useDispatch();
   useEffect(()=>{
       if(!isAuthenticated)
       Dispatch(updateProfileInfo())
   },[])

    return (
        <div>
            <NavBar></NavBar>
           <Header></Header>
           <Courses></Courses>
        </div>
    )
}

export default Home