import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userName:null, //its like a [userName, setUserName]=setState(null)
  userEmail:null,
  isAuthenticated:false,
  isLoad:true
};
export const authSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName=action.payload.userName //like as setUserName=action.payload.userName
      state.userEmail=action.payload.userEmail //like as setUserEmail
      state.isAuthenticated=true
      state.isLoad=false
    },
    setUserLogOutState:(state, action)=>{
      state.userName=null
      state.userEmail=null
      state.isAuthenticated=false
      state.isLoad=false
    },
    updateProfileInfo:(state)=>{
      state.isLoad=false
    }
  },
  
});

// Action creators are generated for each case reducer function
export const {setActiveUser,setUserLogOutState, updateProfileInfo} = authSlice.actions;
export default authSlice.reducer;
