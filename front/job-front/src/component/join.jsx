import { useDispatch } from 'react-redux';
import { useRef } from 'react'
const Join = () => {
  const dispatch = useDispatch();
  const refId = useRef();
  const refPass = useRef();
  const refRole = useRef();
  const sendJoin = () => {
    dispatch({ type: "TRY_JOIN", payload: { memberId: refId.current.value, password: refPass.current.value, role: refRole.current.value } });
  }

  return (<>
    <label>아이디</label>
    <input  ref={refId}></input>
    <label>비밀번호</label>
    <input ref={refPass}></input>
    <label>권한</label>
    <select ref={refRole}>
      <option value="USER">
        사용자
      </option>
      <option value="ADMIN">
        관리자
      </option>
    </select>
  
    <button type="submit" onClick={sendJoin}>확인</button>
  </>)
}

export default Join;