
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countUp, selectCount } from 'store/reducer/loginReducer';
const Login = () => {
  
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (<>
    <div>hello world</div>
    <button onClick={() => {
      dispatch(countUp());
    }}>
      클릭
    </button>
    {count}
  </>)
}


export default Login;