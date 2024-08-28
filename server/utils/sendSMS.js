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
    return true;
  } catch (error) {
    console.log("error SMS");
    return false;
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

    const message = `MyMess, Your OTP is ${otp}. Don't share your OTP with anyone.`;
    const toMobile = req.body.mobileNum;

    const msg = await sendSMS(`+91${toMobile}`, message);

    if (msg === true) {
      await User.findOneAndUpdate(
        { mobileNum: req.body.mobileNum },
        { otp: otp },
        { new: true }
      );
      console.log("OTP", otp);
    } else {
      console.log("otp not send");
    }

    res.status(200).json(msg);
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
