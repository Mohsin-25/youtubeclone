import React, { useEffect, useState } from "react";
import "./WatchVideo.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../fetchFromAPI";
import Videos from "./Videos";
import NavbarMainTop from "./Navbars/NavbarMainTop";

export default function WatchVideo() {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // for main video
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0]),

      // for related videos
      fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setRelatedVideos(data.items))
    );
  }, [id]);
  if (!videoDetail?.snippet) {
    // return "Something Went Wrong...";
    return "Loading...";
  }

  const {
    snippet: { title, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div>
      <NavbarMainTop></NavbarMainTop>
      <div className="videoScreen">
        <div className="watchVideoInfo">
          <div className="videoAndDetail">
            <div className="player-wrapper">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                className="react-player"
                width="100%"
                height="100%"
                // width="900px"
                // height="500px"
              />
            </div>
            <span className="vidTitle">{title}</span>
            <span className="viewAndLikes">
              {parseInt(viewCount).toLocaleString()} views
            </span>
            <span className="viewAndLikes">
              {parseInt(likeCount).toLocaleString()} likes
            </span>
            {/* <Link to={`/channel/${channelDetail?.id?.channelId}`}> */}
            <div className="channelPoster">
              <img
                src={thumbnails?.high?.url}
                alt=""
                className="channelPosterlogo"
              />
              <span>{channelTitle}</span>
              <button>Subscribe</button>
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className="recommended">
          <h3>Related Videos</h3>
          <Videos videos={relatedVideos}></Videos>
        </div>
      </div>
    </div>
  );
}

