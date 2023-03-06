import { Link } from 'react-router-dom';

const Header = () => {
  
  return (
    <>
      <Link to="/login">로그인</Link>
      <Link to="/join">회원가입</Link>
      <Link to="/chat">채팅</Link>
      <Link to="/jobcrawler">잡크롤러</Link>
    
    </>
  )
}

export default Header;