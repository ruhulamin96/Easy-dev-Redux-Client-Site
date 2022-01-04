import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  filterData: [],
  enrollData: [],
  yourCourse: [],
  allCourse: [],
  isload:true
};
export const allCourse = createAsyncThunk("allCourse", async () => {
  const response = await axios.get(`https://polar-bayou-90193.herokuapp.com/allcourses`);
  return response.data;
});
export const getData = createAsyncThunk("getPythonData", async (name) => {
  const response = await axios.get(
    `https://polar-bayou-90193.herokuapp.com/allcourses?name=${name}`
  );
  return response.data;
});

export const EnrollData = createAsyncThunk("EnrollData", async (id) => {
  const response = await axios.get(`https://polar-bayou-90193.herokuapp.com/allcourses/${id}`);
  return response.data;
});
export const enrolledCourse = createAsyncThunk(
  "EnrollCourse",
  async (course) => {
    const response = await axios.post(
      `https://polar-bayou-90193.herokuapp.com/enrollcourse`,
      course
    );

    return response.data;
  }
);
export const yourCourse = createAsyncThunk("yourCourse", async (userEmail) => {
  console.log("user email", userEmail);
  const response = await axios.get(
    `https://polar-bayou-90193.herokuapp.com/enrollcourse?userEmail=${userEmail}`
  );
  return response.data;
});
export const deleteEnrollment = createAsyncThunk(
  "deleteEnrollment",
  async (id) => {
    // console.log('id', id)
    const response = await axios.delete(
      `https://polar-bayou-90193.herokuapp.com/enrollcourse/${id}`
    );

    return response.data;
  }
);

export const pythonSlice = createSlice({
  name: "python",
  initialState,
  reducers: {
    deleteCourse: (state, action) => {
      state.yourCourse = state.yourCourse.filter(
        (item) => item._id !== action.payload
      );
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(allCourse.fulfilled, (state, action) => {
      // Add user to the state array
      state.allCourse = action.payload;
      state.isload=false;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      // Add user to the state array
      state.filterData = action.payload;
      state.isload=false;
    });
    builder.addCase(EnrollData.fulfilled, (state, action) => {
      // Add user to the state array
      state.enrollData = action.payload;
      state.isload=false;
    });
    builder.addCase(enrolledCourse.fulfilled, (state, action) => {
      // Add user to the state array
      state.enrolledCourse = action.payload;
      state.isload=false;
      alert("You have Enrolled Course Successfully!!!");
    });
    builder.addCase(yourCourse.fulfilled, (state, action) => {
      // Add user to the state array
      state.yourCourse = action.payload;
      state.isload=false;
      // alert('Enroll course Successfully placed!!!')
    });
    builder.addCase(deleteEnrollment.fulfilled, (state, action) => {
      state.isload=false;
      // Add user to the state array
      // console.log(yourCourse)
      // yourCourse:state.fillter(data=>data._id!==action.payload.id)
      // state.yourCourse=action.payload
      // alert('Enroll course Successfully placed!!!')
    });
  },
});

// Action creators are generated for each case reducer function
export const { deleteCourse } = pythonSlice.actions;

export default pythonSlice.reducer;
