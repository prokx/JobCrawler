import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    memberId: "",
    password: "",
    isLogin: false,
    accessToken: "",
    refreshToken: "",
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
        isLogin: true,
        accessToken: action.payload.accessToken,
      };
    },
  },
});

export const { countUp } = login.actions;
export const selectIsLogin = (state) => state.login.user.isLogin;
export const selectMemberId = (state) => state.login.user.memberId;
export const selectAccessToken = (state) => state.login.user.accessToken;
export default login.reducer;
