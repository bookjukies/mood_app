import React from "react";
import SideBar from "../../components/SideBar";

const Chat = () => {
  return <div className='h-screen text-white pr-8 flex flex-col gap-4'>
      <div className="flex">
        <SideBar />

        <div className="flex gap-4">
          <div className="">
            <h3>Conversations</h3>
          </div>
          <div className="">chat</div>
        </div>
      </div>
    </div>;
};

export default Chat;
