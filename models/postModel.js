import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: String,
    images: {
      Array,
      required: true,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comment" }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  { timeStamps: true }
);

export default mongoose.model("post", postSchema);
