import { selectJobList } from 'store/reducer/jobReducer'
import { selectAccessToken } from "store/reducer/loginReducer";
import { useSelector,useDispatch } from 'react-redux';
const JobCrawler = () => {

  const dispatch = useDispatch();
  const jobList = useSelector(selectJobList);
  const accessToken = useSelector(selectAccessToken);
  const fetchJob = () => {
    dispatch({ type: "TRY_GETJOB", payload: { accessToken: accessToken } });
  }
  return (
    <>
      <button onClick={fetchJob}>실행</button>
      {jobList.map((data) => {
        
        return <li>data.title</li>;
      })
    }
    </>
  )
}

export default JobCrawler