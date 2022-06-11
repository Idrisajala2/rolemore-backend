const mongoose = require("mongoose");
const ratingModel = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "use",
    },
    rate: {
      type: Number,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ratings", ratingModel);
