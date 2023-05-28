import classNames from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";

import styles from "./Login.module.scss";
import * as ServiceApi from "../../api/serviceApi";

const cx = classNames.bind(styles);

function Login() {
  // const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const isValidPassword = (password) => {
    return password.length >= 8 && password.length <= 16 && password.indexOf(' ') === -1;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!isValidEmail(email)) {
    //   alert("Invalid email");
    //   return;
    // };

    if (!isValidPassword(password)) {
      alert("Password length must be 8 to 16 characters and not contain any space");
      return;
    };

    const res = await ServiceApi.login({
      username: username,
      password: password
    });

    if (res.status === 1) {
      setCookie('access_token', res.data.access_token, { path: '/' });
      setCookie('refresh_token', res.data.refresh_token, { path: '/' });
      dispatch({ type: 'SET_USER', payload: res.data.id });
      navigate("/chat");
    } else {
      alert(res.message);
    }
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {/* <div className={cx('input-container')}>
            <FontAwesomeIcon className={cx('input-icon')} icon={faUser} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
          </div> */}
        <div className={cx('input-container')}>
          <FontAwesomeIcon className={cx('input-icon')} icon={faUser} />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
        </div>
        <div className={cx('input-container')}>
          <FontAwesomeIcon className={cx('input-icon')} icon={faKey} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
        </div>
        <div className={cx('btn-container')}>
          <button className={cx('btn', 'active')} type="submit">Login</button>
          <div className={cx('spread')}>Not have an account yet?</div>
          <button className={cx('btn')} onClick={() => navigate("/register")}>Register</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login;