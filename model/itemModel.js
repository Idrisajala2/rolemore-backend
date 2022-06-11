const mongoose = require("mongoose");
const itemModel = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "likes",
      },
    ],
    rating: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("items", itemModel);
