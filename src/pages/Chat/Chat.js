/* eslint-disable no-unused-expressions */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Chat.module.scss";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import MessageInput from "../../components/MessageInput";
import Message from "../../components/Message";
import ProfileSetting from "../../components/ProfileSetting";
import DirectMessage from "./DirectMessage";

const cx = classNames.bind(styles);

function Chat() {
  // const { channelId } = useParams();
  // const [channelDetails, setChannelDetails] = useState(null);
  // const [channelMessages, setChannelMessages] = useState([]);
  const showProfileSetting = useSelector(state => state.profileSettings);

  useEffect(() => {
    console.log(showProfileSetting);
  }, [showProfileSetting]);

  // Get channel data (messages, users, details, ...)
  // useEffect(() => {
  //   if (channelId) {
  //     console.log("channel");
  //   }
  // }, [channelId]);

  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>
          <DirectMessage />
        </div>
        {showProfileSetting && <ProfileSetting />}
      </div>
    </div>
  );
}

export default Chat;