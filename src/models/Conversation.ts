import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    title: {
      type: String,
      default: "Untitled Conversation",
    },
    messagesCount: {
      type: Number,
      default: 0,
    },
    context: {
      type: Object,
      default: {},
    },
    endedAt: {
      type: Date,
    },
  },
  { timestamps: { createdAt: "startedAt", updatedAt: "updatedAt" } }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
