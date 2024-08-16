import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import profile_img_kaushik from "../images/profile_img_kaushik.jpg";

const AdCard = ({ video }) => {
  return (
    // <Link to={video.navigateTo}>
    <div className="relative group">
      <span className=" absolute  bottom-0  w-full z-0    text-white text-lg font-bold bg-black bg-opacity-70 px-3 py-1 rounded-b-2xl opacity-0 group-hover:opacity-80 cursor-pointer group-hover:blur-none transition-opacity duration-300">
        Click To View My Resume
      </span>

      <div className="border-2 border-red-950 rounded-2xl overflow-hidden">
        <VideoCard
          video={video}
          isAdd={true}
          profilePicture={profile_img_kaushik}
        />
      </div>
    </div>
    // </Link>
  );
};

export default AdCard;
