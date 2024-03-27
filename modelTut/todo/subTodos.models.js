import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  },
  {
    timestamps: true,
  }
);

const SubTodo = mongoose.model("SubTodo", subTodoSchema);