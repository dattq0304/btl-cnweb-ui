import classNames from "classnames/bind";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from "./ProfileSetting.module.scss";

const cx = classNames.bind(styles);

function ProfileSetting() {
  const dispatch = useDispatch();

  const toggleProfileSetting = () => {
    dispatch({ type: 'TOGGLE_PROFILE_SETTING' });
  };

  return <div className={cx('wrapper')}>
    <div className={cx('header')}>
      <p>Profile setting</p>
      <div onClick={toggleProfileSetting} className={cx('icon')}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  </div>
}

export default ProfileSetting;