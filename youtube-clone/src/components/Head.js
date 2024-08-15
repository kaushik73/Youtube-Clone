import React, { useCallback, useEffect, useRef, useState } from "react";
import menu_logo from "../images/menu.png";
import youtube_logo from "../images/logo.png";
import search_icon from "../images/search.png";
import voice_search_icon from "../images/voice-search.png";
import notification_icon from "../images/notification.png";
import upload_icon from "../images/upload.png";
import tom_icon from "../images/tom.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/configSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const searchContainerRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleMenuLogoClick = () => {
    dispatch(toggleMenu());
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      // event.target detect karta hai pure DOM m click ko
      // searchContainerRef mai click nahi hua too :
      !searchContainerRef.current.contains(event.target)
    ) {
      setSuggestions([]);
    }
  };

  const getSearchSuggestions = useCallback(async () => {
    if (!searchQuery) return; // Don't fetch if the search query is empty

    console.log(`${YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`, "API call");
    try {
      const response = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`
      );

      const json = await response.json();
      setSuggestions(json[1]);
    } catch {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed h-16 w-full flex items-center justify-between p-4 bg-white z-10">
      {/* Left Section - Menu and YouTube Logo */}
      <div className="flex items-center space-x-4">
        <img
          alt="menu"
          src={menu_logo}
          className="h-6 w-6 cursor-pointer"
          onClick={handleMenuLogoClick}
        />
        <img
          alt="youtube logo"
          src={youtube_logo}
          className="h-12 w-24 cursor-pointer"
        />
      </div>
      {/* Middle Section - Search Bar */}
      <div
        className="relative flex-grow max-w-xl mx-4"
        ref={searchContainerRef}
      >
        <div className="flex items-center flex-grow border border-gray-300 rounded-l-full">
          <input
            value={searchQuery}
            type="search"
            className="w-full py-2 px-4 rounded-l-full outline-none"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="flex items-center justify-center h-10 overflow-hidden w-16 bg-gray-100 border border-gray-300 rounded-r-full"
          >
            <img alt="search icon" src={search_icon} className="h-5 w-5" />
          </button>
        </div>
        {/* <img
          alt="voice search"
          src={voice_search_icon}
          className="ml-5 h-5 w-5 cursor-pointer"
        /> */}
        {suggestions.length > 0 && (
          <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 z-10">
            <ul className="max-h-64 overflow-y-hidden p-2">
              {suggestions.map((suggestion, index) => (
                <>
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                </>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Right Section - Icons */}
      <div className="flex items-center space-x-4">
        <img
          alt="notification icon"
          src={notification_icon}
          className="h-6 w-6 cursor-pointer"
        />
        <img
          alt="upload icon"
          src={upload_icon}
          className="h-6 w-6 cursor-pointer"
        />
        <img
          alt="tom icon"
          src={tom_icon}
          className="h-8 w-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Head;
