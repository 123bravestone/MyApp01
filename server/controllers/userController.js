import User from "../models/userModel.js";

// Create a new user (POST) /api/user/verify_user
export const createUser = async (req, res) => {
  try {
    const { username, mobileNum, otp, userId } = req.body;
    const existingUser = await User.findOne({ mobileNum });
    if (existingUser && mobileNum) {
      return res.status(201).json(existingUser._id);
    } else if (!existingUser && mobileNum) {
      const user = await User.create({ mobileNum: mobileNum });
      res.status(201).json(user._id);
    } else if (userId && otp) {
      try {
        const user = await User.findOne({ _id: userId, otp: otp });
        if (user) {
          const userDetail = { _id: user._id, username: user.username };
          return res.status(201).json(userDetail);
        } else {
          return res.status(201).json(false);
        }
      } catch (error) {
        res.status(402).json({ error: error.message });
      }
    } else if (userId && username) {
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { username: username },
        { new: true }
      );
      return res.status(201).json(user.username);
    }
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
};

// Verify OTP (POST) /api/user/verify_otp
export const verifyOTP = async (req, res) => {
  try {
    const { OTP } = req.body;
    const user = await User.findOne({ otp: OTP });
    if (user) {
      return res.status(201).json(user);
    } else {
      return res.status(201).json(false);
    }
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
};

// Validate user [logIn, logOut] (POST) /api/user/validate
export const validateUser = async (req, res) => {
  try {
    const { _id, validUser } = req.body;
    const user = await User.findOneAndUpdate(
      { _id },
      { validUser },
      { new: true }
    );
    if (user) {
      return res.status(201).json(true);
    } else {
      return res.status(201).json(false);
    }
  } catch (error) {
    res.status(402).json({ error: error.message });
  }
};
