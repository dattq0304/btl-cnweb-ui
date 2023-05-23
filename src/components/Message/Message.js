import classNames from "classnames/bind";

import styles from "./Message.module.scss";

const cx = classNames.bind(styles);

function Message({ message, timestamp, user, userImage }) {
  const formattedDate = (timestamp) => {
    const messageDate = new Date(timestamp);
    const year = messageDate.getFullYear();
    const month = messageDate.getMonth();
    const date = messageDate.getDate();
    const hour = messageDate.getHours();
    const minute = messageDate.getMinutes();

    const today = new Date();
    const isToday = date === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();
    if (isToday) {
      return `Today at ${hour}:${minute}`;
    }
    else {
      return `${date}/${month}/${year} ${hour}:${minute}`;
    }
  };

  return (
    <div className={cx("message")}>
      <img src={userImage} alt="" />
      <div className={cx("message-info")}>
        <h4>
          {user}
          <span className={cx("message-timestamp")}>
            {/* {new Date(timestamp?.toDate()).toLocaleTimeString()} */}
            {formattedDate(timestamp)}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
