import React from "react";
import ChannelCard from "./ChannelCard";
import RelatedVideos from "./RelatedVideos";
import "./Videos.css";

export default function Related({ videos }) {
  // console.log(videos);
  if (!videos?.length) {
    // return "Something Went Wrong...";

    return "Loading...";
  }
  return (
    <div className="relatedVideos">
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <RelatedVideos video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}
