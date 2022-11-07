import React from "react";
import "./RelatedVideos.css";
import { Link } from "react-router-dom";

export default function RelatedVideos({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <div>
      <div className="videoCardRelated">
        <Link
          to={videoId ? `/video/${videoId}` : "/"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt={snippet?.title}
            className="videoImgRelated"
          />
        </Link>

        <Link
          to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="videoInfoRelated">
            {/* <div>
              <img
                src={snippet?.thumbnails?.high?.url}
                alt=""
                className="videoChannelLogoRelated"
              />
            </div> */}
            <div>
              <h4>{snippet?.title.slice(0, 50) + "..."}</h4>
              <h5 className="channelNameRelated">{snippet?.channelTitle}</h5>

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
