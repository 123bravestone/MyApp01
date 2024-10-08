import {} from "dotenv/config.js";
import User from "../models/userModel.js";
import Twilio from "twilio";
const ACaccountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = Twilio(ACaccountSid, authToken);
const sendSMS = async (toMobile, msg) => {
  let msgOption = {
    from: process.env.TWILIO_FROM_NUMBER,
    to: toMobile,
    body: msg,
  };

  try {
    await client.messages.create(msgOption);
  } catch (error) {
    console.log("error SMS");
  }
};

// // post('/api/user/message', getMessage);
// export const getMessage = async (req, res, next) => {
//   try {
//     sendSMS(req.body.mobileNum, req.body.message);
//     res.status(200).json({ message: "Message sent" });
//   } catch (error) {
//     next(error);
//   }
// };
export const sentOTP = async (req, res, next) => {
  try {
    const otp = randomNumber();
    console.log("OTP", otp);
    const user = await User.findOneAndUpdate(
      { mobileNum: req.body.mobileNum },
      { otp: otp },
      { new: true }
    );

    const message = `FOOD HOUSE, Your OTP is ${otp}. Don't share your OTP with anyone.`;
    const toMobile = req.body.mobileNum;

    sendSMS(`+91${toMobile}`, message);
    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    next(error);
  }
};

const randomNumber = () => {
  // five digit random number generator
  const min = 10000;
  const max = 99999;
  const num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
};
