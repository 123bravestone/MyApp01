import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OTPTextView from "react-native-otp-textinput";
import { setToken } from "../../store/CreateSlices/UserSlice.js";
import axios from "axios";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

const OTPVerification = ({ setValidation, setFlag, ID }) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const dispatchEvent = useDispatch();

  const submitOTP = async () => {
    if (otp.length > 0 && ID) {
      await axios
        .post(`${process.env.EXPO_PUBLIC_API_URL}/api/user/verify_user`, {
          otp: otp,
          userId: ID,
        })
        .then((response) => {
          if (response.data._id) {
            if (response.data.username) {
              dispatchEvent(setToken(true));

              router.replace("/home");
            } else {
              setValidation(true);
            }
          } else if (response.data === false) {
            Alert.alert("Wrong OTP");
          } else {
            Alert.alert("Something went wrong");
          }
        })
        .catch((error) => {
          console.log("otp error", error);
        });
    } else if (otp.length === 0) {
      Alert.alert("Please enter OTP");
    } else {
      Alert.alert("Please enter valid OTP");
    }
  };

  useEffect(() => {
    const backAction = () => {
      Alert.alert("If you want to go back", "Press OK to go back", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setValidation(false);
            setFlag(false);
          },
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View className="flex-[2] items-center bg-white">
      <View className=" items-center justify-center ">
        <Text className="text-[26px] font-[800]  text-[#0baf79] ">
          OTP Verification
        </Text>
        <Text className="text-[16px] text-center w-[260px] font-semibold text-[#7b7e7ce5] ">
          We have sent the verification code to your mobile number
        </Text>
      </View>
      <KeyboardAwareScrollView className=" mt-[40px] ">
        <OTPTextView
          textInputStyle={style.OTPstyle}
          handleTextChange={(text) => setOtp(text)}
          inputCount={5}
          tintColor={"#10b98f"}
        />
        <View className="flex-row justify-between ">
          <Text className="text-[18px] text-[#10b98f] font-bold py-2">
            Resend OTP
          </Text>
          <Text className="text-[18px] text-[#10b98f] font-bold py-2">
            00:00
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => submitOTP()}
          className="mt-[28px] bg-[#10b98f] rounded-[10px] py-4"
        >
          <Text className="text-[18px] text-center text-[#ffffff] uppercase font-bold ">
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  OTPstyle: {
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    width: 50,
    height: 50,
  },
});
export default OTPVerification;
