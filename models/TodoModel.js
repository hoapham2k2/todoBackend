import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const todo = mongoose.model("todo", todoSchema);
