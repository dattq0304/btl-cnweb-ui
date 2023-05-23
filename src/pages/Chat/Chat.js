/* eslint-disable no-unused-expressions */
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Chat.module.scss";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import MessageInput from "../../components/MessageInput";
import Message from "../../components/Message"

const cx = classNames.bind(styles);

function Chat() {
  // const { channelId } = useParams();
  // const [channelDetails, setChannelDetails] = useState(null);
  // const [channelMessages, setChannelMessages] = useState([]);
  const [sidebarWidth, setSidebarWidth] = useState(240);
  const [isResizing, setIsResizing] = useState(false);4

  // Get channel data (messages, users, details, ...)
  // useEffect(() => {
  //   if (channelId) {
  //     console.log("channel");
  //   }
  // }, [channelId]);

  // Fake data for channel
  const channelDetails = {
    name: "test-channel"
  };
  const channelMessages = [
    {
      message: "Good night",
      timestamp: "2023-05-22T16:40:00Z",
      user: "John",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/",
    },
    {
      message: "Bye",
      timestamp: "2023-05-22T16:41:00Z",
      user: "Alice",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/",
    },
    {
      message: "Good morning, everyone!",
      timestamp: "2023-05-23T00:16:30Z",
      user: "Alice",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/",
    },
    {
      message: "Has anyone seen my keys?",
      timestamp: "2023-05-23T00:30:45Z",
      user: "Bob",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/",
    },
    {
      message: "What's the plan for today?",
      timestamp: "2023-05-23T09:20:30Z",
      user: "David",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "Just finished the report. It's ready for review.",
      timestamp: "2023-05-23T10:00:00Z",
      user: "Sarah",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "Great job, Sarah! I'll take a look at it.",
      timestamp: "2023-05-23T10:15:30Z",
      user: "Michael",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "We have a team meeting at 11:00 AM. Don't forget!",
      timestamp: "2023-05-23T10:30:15Z",
      user: "Jennifer",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "Please remember to submit your timesheets by end of day.",
      timestamp: "2023-05-23T11:45:00Z",
      user: "Mark",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "I'm having trouble with the server. Can anyone assist?",
      timestamp: "2023-05-23T12:30:20Z",
      user: "Chris",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "Just completed the coding task. Ready for code review.",
      timestamp: "2023-05-23T13:15:45Z",
      user: "Linda",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    {
      message: "Our client meeting has been rescheduled to tomorrow at 2 PM.",
      timestamp: "2023-05-23T14:00:10Z",
      user: "Alex",
      userImage: "https://steamuserimages-a.akamaihd.net/ugc/1023948150702322315/A9FBC7509EF73D50335D4E04F6EA890C7088B4CC/"
    },
    // Add more chat messages here
  ];
  

  // Setups for adjusting sidebar width
  const handleMouseDown = (event) => {
    event.preventDefault();
    event.target.classList.add(cx('resize-wide'));
    setIsResizing(true);
  };

  const handleMouseMove = (event) => {
    if (isResizing) {
      setSidebarWidth(event.clientX);
    }
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove(cx('resize-wide'));
    setIsResizing(false);
  };

  const handleMouseUp = (event) => {
    setIsResizing(false);
    event.target.classList.remove(cx('resize-wide'));
  };

  return (
    <div className={cx('wrapper')}>
      <Sidebar width={sidebarWidth} />
      <div className={cx('content')}>
        <div
          className={cx('resize')}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
        />
        <Header />
        <div className={cx('main')}>
          <div className={cx('messages')}>
            {channelMessages.map(({ message, timestamp, user, userImage }) => (
              <Message
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
                key={timestamp}
              />
            ))}
          </div>
          <MessageInput 
            className={cx('message-input')}
            channelName={channelDetails.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;