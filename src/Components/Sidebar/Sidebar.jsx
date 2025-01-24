// import React from "react";
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  const { prevPrompts, onSent, setRecentPrompt, newChat } = useContext(Context);

  const loader = async (prompt) => {
    onSent(prompt);
    setRecentPrompt(prompt);
  };

  // console.log(prevPrompts);

  return (
    <div className="sidebar font-outfit  h-[100vh] inline-flex flex-col justify-between  bg-gray-100 p-4">
      <div className="top">
        <img
          className="w-5 cursor-pointer "
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          src={assets.menu_icon}
          alt="menu-icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img className="w-5 " src={assets.plus_icon} alt="plus-icon" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent flex flex-col gap-1 mt-4">
            <p className="m-2">Recent</p>

            {prevPrompts.map((item, index) => (
              <div onClick={() => loader(item)} key={index} className="entry">
                <img className="h-5" src={assets.message_icon} alt="recent" />
                <p className="text-gray-600">{item.slice(0, 18)}...</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-entry entry">
          <img className="icon" src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-entry entry">
          <img className="icon" src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-entry entry">
          <img className="icon" src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>{" "}
    </div>
  );
};

export default Sidebar;
