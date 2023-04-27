import mongoose from "mongoose";

const downloadSchema = mongoose.Schema({
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Download = mongoose.model("Download", downloadSchema);

export default Download;
