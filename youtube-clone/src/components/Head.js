import React, { useCallback, useEffect, useRef, useState } from "react";
import menu_logo from "../images/menu.png";
import cosTubeLogo from "../images/cosTubeLogo.png";
import search_icon from "../images/search.png";
import notification_icon from "../images/notification.png";
import upload_icon from "../images/upload.png";
import tom_icon from "../images/tom.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/configSlice";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_SUGGESTION_API,
} from "../utils/constants";
import { cacheResults, setSearchText } from "../utils/store/searchSlice";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search.searchSuggestions);
  const searchContainerRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleMenuLogoClick = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setShowSuggestions(false);
    // const suggestionVideoIds = fetchVideoIds(suggestion);
    dispatch(setSearchText(suggestion));
    navigate("/");
  };
  const getSearchSuggestions = useCallback(async () => {
    if (!searchQuery) return;

    console.log(`${YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`, "API call");
    try {
      const response = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTION_API}${searchQuery}`
      );

      const json = await response.json();
      dispatch(cacheResults({ [searchQuery]: json[1] }));
      setSuggestions(json[1]);
    } catch {
      setSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <header className="fixed h-16 w-full flex items-center justify-between p-4 bg-white z-10">
      {/* Left Section - Menu and YouTube Logo */}
      <div className="flex items-center space-x-2">
        <img
          alt="menu"
          src={menu_logo}
          className="h-6 w-6 cursor-pointer"
          onClick={handleMenuLogoClick}
        />
        <img
          alt="youtube logo"
          src={cosTubeLogo}
          className="h-12 w-24 cursor-pointer object-contain"
        />
      </div>
      {/* Middle Section - Search Bar */}
      <div
        className="relative flex-grow max-w-xl mx-4"
        ref={searchContainerRef}
        onMouseOver={() => setShowSuggestions(true)}
        onMouseOut={() => setShowSuggestions(false)}
      >
        <div className="flex items-center flex-grow">
          <input
            value={searchQuery}
            type="search"
            className="w-full py-2 px-4  border border-gray-300 rounded-l-full outline-none"
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
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-0 z-10">
            <ul className="max-h-64 overflow-y-hidden p-2">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {suggestion}
                </li>
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
