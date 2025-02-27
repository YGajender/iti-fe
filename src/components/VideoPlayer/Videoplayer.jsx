import { useRef } from "react";
import "./Videoplayer.css";

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === e.currentTarget) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${!playState ? "hide" : ""}`}
      ref={player}
      onClick={closePlayer}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gdOvWaJn_RU?si=rCCf0vwgIt6euFQ4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Videoplayer;
