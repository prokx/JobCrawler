import { Routes, Route } from "react-router-dom";
import Login from "component/login";
import Join from "component/join";
import JobCrawler from "component/jobcrawer"
const Router = () => {

  return (<>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/jobcrawler" element={<JobCrawler/>}/>
        </Routes>
  </>)
}

export default Router;
