import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      //api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20) + " 🚀",
        })
      );
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    dispatch(
      addMessage({
        name: "Mine Sky",
        message: liveMessage,
      })
    );

    setLiveMessage("");
  };

  return (
    <>
      <div className="ml-2 border border-gray-300 h-[500px] rounded-md overflow-y-scroll flex flex-col-reverse ">
        {chatMessage.map((c, i) => (
          <ChatMessages key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="ml-2   my-2 p-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="mx-2 px-2 rounded-md"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Write Message"
        />
        <button
          className="mx-4 bg-green-300  rounded-sm px-2"
          onClick={() => handleClick()}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
