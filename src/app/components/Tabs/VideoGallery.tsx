import React from "react";
import VideoThumbnail from "./VideoThumbnail";
import videoData from "../../../../data/videoData.json";

const VideoGallery = ({ category }) => {
  const filteredVideos = videoData.filter((video) =>
    category.includes(video.id)
  );

  return (
    <>
      {filteredVideos.map((video) => (
        <VideoThumbnail key={video.id} video={video} />
      ))}
    </>
  );
};

export default VideoGallery;
