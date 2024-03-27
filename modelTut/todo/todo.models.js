import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: String,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      }
    ]
  },
  {
    timestamps: true,
  }
);

const TodoCategorey = mongoose.model("TodoCategorey", todoSchema);