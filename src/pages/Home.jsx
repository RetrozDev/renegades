import "../styles/Home/Home.css";

import HomeHeader from "../components/Home/HomeHeader";
import Home1stPar from "../components/Home/Home1stPar";
const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <Home1stPar />
      <div className="trailerContainer">
        <iframe
          src="https://www.youtube.com/embed/O9N76XGdaEA?rel=0&modestbranding=0&controls=1&rel=0&playsinline=1&enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default Home;
