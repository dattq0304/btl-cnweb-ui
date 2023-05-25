import classNames from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8 && password.length <= 16 && password.indexOf(' ') === -1;
  };

  const register = () => {
    if (!isValidEmail(email)) {
      alert("Invalid email");
      return;
    };

    if (!isValidPassword(password)) {
      alert("Password length must be 8 to 16 characters and not contain any space");
      return;
    };

    if (password !== confirmPassword) {
      alert("Please confirm your password");
      return;
    }

    alert("Register with: \nEmail: " + email + " Password: " + password);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <from onSumbit={register}>
          <h1>Register</h1>
          <div className={cx('input-container')}>
            <FontAwesomeIcon className={cx('input-icon')} icon={faUser} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
          </div>
          <div className={cx('input-container')}>
            <FontAwesomeIcon className={cx('input-icon')} icon={faKey} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
          </div>
          <div className={cx('input-container')}>
            <FontAwesomeIcon className={cx('input-icon')} icon={faKey} />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password"></input>
          </div>
          <div className={cx('btn-container')}>
            <button className={cx('btn', 'active')} onClick={() => register()}>Register</button>
            <div className={cx('spread')}>Already have an account?</div>
            <button className={cx('btn')} onClick={() => navigate("/login")}>Login</button>
          </div>
        </from>
      </div>
    </div>
  )
}

export default Register;