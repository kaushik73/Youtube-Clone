import React from "react";
import homeIcon from "../images/home.png";
import exploreIcon from "../images/explore.png";
import subscriptionIcon from "../images/subscription.png";
import libraryIcon from "../images/library.png";
import historyIcon from "../images/history.png";
import playlistIcon from "../images/playlist.png";
import messagesIcon from "../images/messages.png";
import showMoreIcon from "../images/show-more.png";
import jackIcon from "../images/Jack.png";
import simonIcon from "../images/Jack.png";
import tomIcon from "../images/tom.jpg";
import meganIcon from "../images/Jack.png";
import cameronIcon from "../images/Jack.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.config.isMenuOpen);

  return (
    <div
      className={` fixed left-0 p- h-auto transition-all duration-300 ${
        isMenuOpen ? "w-64" : "w-16"
      } min-h-[calc(100%-64px)]`}
    >
      <div className="pl-1 overflow-y-hidden hover:overflow-y-scroll overflow-x-hidden h-screen sidebar-container">
        <div className="space-y-6">
          <Link
            to="/"
            className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md"
          >
            <img src={homeIcon} alt="Home" className="w-6 h-6" />
            {isMenuOpen && <p>Home</p>}
          </Link>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img src={exploreIcon} alt="Explore" className="w-6 h-6" />
            {isMenuOpen && <p>Explore</p>}
          </div>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img
              src={subscriptionIcon}
              alt="Subscription"
              className="w-6 h-6"
            />
            {isMenuOpen && <p>Subscription</p>}
          </div>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img src={libraryIcon} alt="Library" className="w-6 h-6" />
            {isMenuOpen && <p>Library</p>}
          </div>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img src={historyIcon} alt="History" className="w-6 h-6" />
            {isMenuOpen && <p>History</p>}
          </div>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img src={playlistIcon} alt="Playlist" className="w-6 h-6" />
            {isMenuOpen && <p>Playlist</p>}
          </div>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img src={messagesIcon} alt="Messages" className="w-6 h-6" />
            {isMenuOpen && <p>Messages</p>}
          </div>
          <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
            <img src={showMoreIcon} alt="Show More" className="w-6 h-6" />
            {isMenuOpen && <p>Show More</p>}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-400">
              SUBSCRIPTIONS
            </h3>
            <div className="space-y-4 mt-4">
              <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
                <img
                  src={jackIcon}
                  alt="Jack"
                  className="w-6 h-6 rounded-full"
                />
                {isMenuOpen && <p>Jack &bull;</p>}
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
                <img
                  src={simonIcon}
                  alt="Simon"
                  className="w-6 h-6 rounded-full"
                />
                {isMenuOpen && <p>Simon</p>}
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
                <img src={tomIcon} alt="Tom" className="w-6 h-6 rounded-full" />
                {isMenuOpen && <p>Tom &bull;</p>}
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
                <img
                  src={meganIcon}
                  alt="Megan Fox"
                  className="w-6 h-6 rounded-full"
                />
                {isMenuOpen && <p>Megan Fox &bull;</p>}
              </div>
              <div className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded-md">
                <img
                  src={cameronIcon}
                  alt="Cameron Green"
                  className="w-6 h-6 rounded-full"
                />
                {isMenuOpen && <p>Cameron Green</p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
