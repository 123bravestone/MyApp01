import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  mobileNum: {
    type: Number,
    required: true,
    unique: false,
  },
  otp: {
    type: Number,
    required: false,
    unique: true,
  },
  validUser: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: false,
  },

  monthlySub: {
    success: {
      type: Boolean,
      default: false,
    },
    subDate: {
      type: String,
    },
    expireDate: {
      type: String,
    },
  },
  dailySub: {
    success: {
      type: Boolean,
      default: false,
    },
    subDate: {
      type: String,
    },
    expireDate: {
      type: String,
    },
  },
  //   orders: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "order",
  //     },
  //   ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
