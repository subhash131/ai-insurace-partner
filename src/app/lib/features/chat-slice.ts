import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  initialState: {
    messages: [
      {
        role: "assistant",
        content: "Hello! How can I assist you today?",
      },
    ],
    isLoading: false,
    error: null,
  },
  name: "chat",
  reducers: {
    setChat: (state, action) => {
      return action.payload;
    },
  },
});

export const { setChat } = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
