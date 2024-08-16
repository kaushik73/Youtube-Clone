import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import myResume from "../assets/_Kaushik_Jain_.pdf";
const MyResumeCard = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div
      className={`mr-2 px-2 flex-1  justify-center items-center w-full ml-64  bg-white shadow-lg rounded-lg `}
    >
      <div className="flex justify-around items-center my-2 ">
        <div className="">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            My Resume
          </h2>
        </div>
        <Link
          to={myResume}
          target="_blank"
          download
          className="bg-gradient-to-r from-cyan-500  to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold p-2 m-0 rounded-md transition duration-200 ease-in-out"
        >
          Download Resume
        </Link>
      </div>
      <div className="flex justify-center mb-6 min-h-[600px] min-w-[400px]">
        <object
          data={myResume}
          type="application/pdf"
          width="700"
          height="1000"
        >
          <p>
            Alternative Link :{" "}
            <a href={myResume} className="text-blue-700">
              to the PDF!
            </a>
          </p>
        </object>
      </div>
    </div>
  );
};

export default MyResumeCard;
