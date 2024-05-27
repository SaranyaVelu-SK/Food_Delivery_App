import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';

const Header = () => {
    const [loginBtn,setLoginBtn] = useState('login')
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
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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