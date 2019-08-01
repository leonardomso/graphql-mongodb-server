import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  date: {
    published: {
      type: Date,
      default: Date.now()
    },
    updated: {
      type: Date,
      default: Date.now()
    }
  }
});

export default mongoose.model("Post", PostSchema);
