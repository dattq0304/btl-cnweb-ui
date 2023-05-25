import classNames from "classnames/bind";
import { faSortDown, faSortUp, faHashtag, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./Sidebar.module.scss";
import SidebarNav from "./SidebarNav";
import ChannelOption from "./ChannelOption/ChannelOption";
import DirectMessageOption from "./DirectMessageOption";

const cx = classNames.bind(styles);

function Sidebar({ width }) {
  const [showChannels, setShowChannels] = useState(true);
  const [showDirectMessages, setShowDirectMessages] = useState(true);

  // Fake channels 
  const channels = [
    {
      name: "Test channel",
      id: "12345",
    }
  ];
  // Fake direct message 
  const directMessages = [
    {
      name: "Alice",
      id: "54321",
    }
  ];

  return (
    <div className={cx('wrapper')} style={{ width: width }}>
      <div className={cx("spread")}></div>
      <div className={cx('title')}>
        <h3>GROUP 10</h3>
      </div>
      <div className={cx("spread")}></div>
      <div className={cx('list')}>
        <SidebarNav
          title="Channels"
          icon={showChannels ? faSortUp : faSortDown}
          onClick={() => { setShowChannels(!showChannels) }}
        />
        {showChannels && channels.map((element, index) => {
          return (
            <ChannelOption
              key={index}
              title={element.name}
              icon={faHashtag}
              id={element.id}
            />
          )
        })}
        <div className={cx("spread")}></div>
        <SidebarNav
          title="Direct messages"
          icon={showDirectMessages ? faSortUp : faSortDown}
          onClick={() => setShowDirectMessages(!showDirectMessages)}
        />
        {showDirectMessages && directMessages.map((element, index) => {
          return (
            <DirectMessageOption
              key={index}
              title={element.name}
              id={element.id}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Sidebar;