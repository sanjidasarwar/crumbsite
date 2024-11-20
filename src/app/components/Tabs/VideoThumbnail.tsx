import React from "react";

const VideoThumbnail = ({ video }) => (
  <div className="cw3my cxdxt czjaw cnc7y">
    <img
      className="cs8sl"
      src={video.src}
      width="352"
      height="264"
      alt={video.title}
    />
    <div className="cgk3d c54sb c2ysc cnc7y">
      <div className="cw3my cxdxt cnc7y c2h4q">
        <a className="cmemh clq5w ccb29 ceo83" href="#0">
          <img
            src="https://preview.cruip.com/appy/images/play-button.svg"
            width="72"
            height="72"
            alt="Play icon"
          />
        </a>
      </div>
      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
        <a className="c0atf c8d3u cf4hw" href="#0">
          {video.title}
        </a>
        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
          {video.duration}
        </div>
      </div>
    </div>
  </div>
);

export default VideoThumbnail;
