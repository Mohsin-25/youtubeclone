import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../fetchFromAPI";
import ChannelCard from "./ChannelCard";
import "./ChannelDetail.css";
import NavbarMainTop from "./Navbars/NavbarMainTop";
import Videos from "./Videos";

export default function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  //   console.log(channelDetail);
  return (
    <div>
      <NavbarMainTop></NavbarMainTop>
      <div className="channelPage">
        <div className="wallpaper" />
        <div className="channelDetailPoster">
          <ChannelCard channelDetail={channelDetail}></ChannelCard>
        </div>
        <div className="channelVideos">
          <Videos videos={videos}></Videos>
        </div>
      </div>
    </div>
  );
}
