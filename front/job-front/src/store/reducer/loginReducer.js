import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    memberId: "",
    password: "",
    isLogin: false,
  },
};

const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    COUNT_UP(state, action) {
      state.count++;
    },
    SET_USER(state, action) {
      console.log(action.payload);
      state.user = {
        ...state.user,
        memberId: action.payload.memberId,
        password: action.payload.password,
        isLogin: true,
      };
    },
  },
});

export const { countUp } = login.actions;
export const selectCount = (state) => state.login.count;
export const selectUser = (state) => state.login.user;
export default login.reducer;
