import mongoose, { Document, Schema, Model } from "mongoose";

export interface IMessage extends Document {
  conversationId: mongoose.Types.ObjectId;
  userId?: mongoose.Types.ObjectId | null;
  sender: "user" | "assistant" | "system";
  message: string;
  type?: string;
  metadata?: {
    model?: string;
    tokensUsed?: number;
    responseTimeMs?: number;
  };
  renderOnUI: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the schema
const messageSchema: Schema<IMessage> = new Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    sender: {
      type: String,
      enum: ["user", "assistant", "system"],
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    message: {
      type: String,
      required: true,
    },
    renderOnUI: {
      type: Boolean,
      default: true,
    },
    metadata: {
      model: { type: String },
      tokensUsed: { type: Number },
      responseTimeMs: { type: Number },
    },
  },
  { timestamps: true }
);

// 3. Create the model
const Message: Model<IMessage> =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);

export default Message;
