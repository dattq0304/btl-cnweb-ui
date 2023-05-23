import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import styles from "./MessageInput.module.scss";

const cx = classNames.bind(styles);

function MessageForm({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input) return false;

    alert(input);

    setInput("");
  }

  return (
    <form onSubmit={sendMessage}>
      <div className={cx('wrapper')}>
        <input
          className={cx('input')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Send a message to #${channelName}`}
        />
        <FontAwesomeIcon 
          className={cx('icon')}
          type="submit"
          icon={faPaperPlane}
          onClick={sendMessage}
        />
      </div>
    </form>
  );
}

export default MessageForm;