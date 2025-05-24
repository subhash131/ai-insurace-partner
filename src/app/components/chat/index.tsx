"use client";
import { RootState } from "@/app/lib/store";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar";
import Messages from "./messages";
import ChatInput from "./chat-input";

const Chat = () => {
  const { messages } = useSelector((state: RootState) => state.chatReducer);
  return (
    <div className="size-full min-h-screen flex">
      <Sidebar />
      <div className="size-full flex flex-col">
        <Messages />
        <ChatInput />
      </div>
    </div>
  );
};

export default Chat;
