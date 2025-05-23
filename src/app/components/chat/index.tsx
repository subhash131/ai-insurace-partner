"use client";
import { RootState } from "@/app/lib/store";
import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const { messages } = useSelector((state: RootState) => state.chatReducer);
  return <div>{JSON.stringify(messages)}</div>;
};

export default Chat;
