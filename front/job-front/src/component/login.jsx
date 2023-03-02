
import React from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useRef } from "react";
import { countUp, selectCount } from 'store/reducer/loginReducer';

const Login = () => {
  
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const id = useRef();
  const pass = useRef();
  
  return (<>
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
    {count}
  </>)
}


export default Login;