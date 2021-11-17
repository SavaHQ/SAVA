import { createSlice } from "@reduxjs/toolkit";

export const firebaseSlice = createSlice({
  name: "firebase",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = firebaseSlice.actions;

export default firebaseSlice.reducer;
