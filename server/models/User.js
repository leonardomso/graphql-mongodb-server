import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

export default mongoose.model("User", UserSchema);
