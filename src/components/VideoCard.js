import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

export default function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div>
      <div className="videoCard">
        <Link
          to={videoId ? `/video/${videoId}` : "/"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt={snippet?.title}
            className="videoImg"
          />
        </Link>

        <Link
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="videoInfo">
            <div>
              <img
                src={snippet?.thumbnails?.high?.url}
                alt=""
                className="videoChannelLogo"
              />
            </div>
            <div>
              <h4>{snippet?.title.slice(0, 50) + "..."}</h4>
              <h5 className="channelName">{snippet?.channelTitle}</h5>

              <h5>
                Uploaded on{" "}
                {snippet?.publishTime
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </h5>
            </div>
          </div>
          {/* </a> */}
        </Link>
      </div>
    </div>
  );
}
