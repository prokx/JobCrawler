
import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useRef } from "react";
import {selectMemberId,selectIsLogin } from 'store/reducer/loginReducer';

const Login = () => {
  
  const dispatch = useDispatch();
 
  const id = useRef();
  const pass = useRef();
  const memberId = useSelector(selectMemberId);
  const isLogin = useSelector(selectIsLogin);
  
  return (<> {isLogin!==true ?
    <>
      <label>아이디: </label>
      <input type="text" ref={id} ></input>
      <label>비밀번호: </label>
      <input type="password" ref={pass}></input>
      <button onClick={() => {
        const i = id.current.value;
        const p = pass.current.value;

        dispatch({ type: "TRY_LOGIN", payload: { memberId: i, password: p } });
      }}>
        확인
      </button>
    </>
    : <>로그인 완료:{memberId}</>
  }
  </>)
  
}


export default Login;