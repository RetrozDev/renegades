import "../styles/Home/Home.css";
import trailer from "../assets/trailer.mp4";

import ReactPlayer from "react-player";

import HomeHeader from "../components/Home/HomeHeader";
import Home1stPar from "../components/Home/Home1stPar";
const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <Home1stPar />
      <ReactPlayer
        url={trailer}
        controls={true}
        className="trailerPlayer"
        volume={0.1}
        width={"auto"}
        height={"auto"}
      />
    </div>
  );
};
export default Home;
