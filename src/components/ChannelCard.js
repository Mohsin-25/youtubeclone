import React from "react";
import { Link } from "react-router-dom";
import "./ChannelCard.css";

export default function ChannelCard({
  // video: {
  //   id: { videoId },
  //   snippet,
  // },
  channelDetail,
  // : {
  //   id: { channelId },
  //   snippet,
  // },
}) {
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}  style={{ textDecoration: 'none' ,color: 'inherit' }}>
      <div className="channelCard">
        <img
          src={channelDetail?.snippet?.thumbnails?.high?.url}
          alt=""
          className="channelLogo"
        />
        <div className="channelCardName">
          <h4>{channelDetail?.snippet?.channelTitle}</h4>
        </div>
      </div>
    </Link>
  );
}
