import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",

  initialState: {
    userId: "",
    token: false,
    username: "",
  },

  reducers: {
    setUserID: (state, action) => {
      state.userId = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    addUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUserID, setToken, addUsername } = UserSlice.actions;
export default UserSlice.reducer;
