import { useDispatch,useSelector } from 'react-redux'
import { countUp, selectCount,selectUser } from "store/reducer/loginReducer"; 

const User = () => {
  const dispatch = useDispatch();
  const onSomeButtonClicked = () => {
    dispatch({ type: "TRY_LOGIN",payload: { memberId:'tom',password:'1234aA!@'}});
  };
  const onUserClick = () => {
    dispatch({ type: "TRY_JOIN", payload: { memberId:'tom',password:'1234aA!@'}});
  };

  const count = useSelector(selectCount);
  const user = useSelector(selectUser);
  
  return (<>
    <div>hello world</div>
    <button onClick={() => {
      dispatch(countUp());
    }}>
      클릭
    </button>
    {user.memberId}
    {count}
    <button onClick={onSomeButtonClicked}>클릭!</button>;
     <button onClick={onUserClick}>유저클릭!</button>;
    
  </>)


};
export default User;
