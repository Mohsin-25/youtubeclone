import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import "./Videos.css";

export default function Videos({ videos }) {
  // console.log(videos);
  if (!videos?.length) {
    // return "Something Went Wrong...";

    return "Loading...";
  }
  return (
    <div className="videos">
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}
