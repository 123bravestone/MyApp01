import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",

  initialState: {
    userId: "",
    token: false,
    username: "",
    isAdmin: false,
    menuImage: "",
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
    addAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    addMenuImage: (state, action) => {
      state.menuImage = action.payload;
    },
  },
});

export const { setUserID, setToken, addUsername, addAdmin, addMenuImage } =
  UserSlice.actions;
export default UserSlice.reducer;
