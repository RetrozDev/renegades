import { useRef, useEffect } from "react";
import "../styles/Home/Home.css";
import trailer from "../assets/trailer.mp4";

import HomeHeader from "../components/Home/HomeHeader";
import Home1stPar from "../components/Home/Home1stPar";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.05;
    }
  }, []);

  return (
    <div className="Home">
      <HomeHeader />
      <Home1stPar />
      <video
        ref={videoRef}
        src={trailer}
        preload="auto"
        style={{ aspectRatio: "auto" }}
        className="homeTrailer"
        controls
      />
    </div>
  );
};

export default Home;
