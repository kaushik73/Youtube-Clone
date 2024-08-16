import React from "react";
import ButtonCard from "./ButtonCard";
import { buttonData as buttonsData } from "../utils/ButtonListDummyData";

const ButtonList = () => {
  return (
    <div className="fixed flex h-10 z-10 gap-x-3 justify-start bg-white pb-2 w-full overflow-auto">
      {buttonsData.map((buttonData, index) => (
        <ButtonCard key={index} content={buttonData} />
      ))}
    </div>
  );
};

export default ButtonList;
