"use client";
import { RootState } from "@/app/lib/store";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./sidebar";

const Chat = () => {
  const { messages } = useSelector((state: RootState) => state.chatReducer);
  return (
    <div className="size-full min-h-screen flex">
      <Sidebar />
      <div>Messages</div>
    </div>
  );
};

export default Chat;
