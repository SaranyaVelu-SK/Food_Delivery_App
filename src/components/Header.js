import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginBtn,setLoginBtn] = useState('login');
    const onlineStatus = useOnlineStatus()
  return (
    <div className="header-div">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={LOGO_URL}
          className="logo"
        ></img>
        <h2 style={{ paddingLeft: "10px" }}>S K Foods</h2>
      </div>
      <div className="nav-items">
        <h3>Online  Status : {onlineStatus ? 'Online' : 'Offline'}</h3>
        <ul>
          <Link to='/' style={{textDecoration:'none',padding:'10px',fontSize:'24px',listStyleType:'none'}}><li>Home</li></Link>
          <Link to ='/aboutus' style={{textDecoration:'none',padding:'10px',fontSize:'24px',listStyleType:'none'}}><li>About us</li></Link>
          <Link to='/contactus' style={{textDecoration:'none',padding:'10px',fontSize:'24px',listStyleType:'none'}}><li>Contact us</li></Link>
          <Link to ='/grocery' style={{textDecoration:'none',padding:'10px',fontSize:'24px',listStyleType:'none'}}><li>Grocery</li></Link>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"
              style={{ width: "30px" }}
            ></img>
          </li>
          <li>
            <button onClick={()=>{loginBtn === 'login' ? setLoginBtn('logout') : setLoginBtn('login')}}>{loginBtn}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;