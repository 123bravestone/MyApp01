import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import { setUserID } from "../../store/CreateSlices/UserSlice";
import { useDispatch } from "react-redux";

const MobileLogin = ({ setFlag }) => {
  const [mobNum, setMobNum] = useState("");
  // const screenWidth = Dimensions.get("window").width;
  const dispatchEvent = useDispatch();

  const router = useRouter();
  const LogIn = async () => {
    setFlag(true);
    if (mobNum.length === 10) {
      await axios
        .post(`${process.env.EXPO_PUBLIC_API_URL}/api/user/verify_user`, {
          mobileNum: mobNum,
        })
        .then(async (response) => {
          if (response.data) {
            dispatchEvent(setUserID(response.data._id));

            await axios
              .post(`${process.env.EXPO_PUBLIC_API_URL}/api/user/message`, {
                mobileNum: mobNum,
              })
              .then((response) => {
                if (response.data) {
                  Alert.alert(`Success OTP sent ${mobNum}`);
                } else {
                  Alert.alert("Something went wrong please try again");
                }
              });
          }
        })
        .catch((error) => {
          console.log("Login error", error);
        });
    } else {
      Alert.alert("Please enter valid mobile number");
    }
  };

  return (
    <View className="flex-[2] items-center bg-white  ">
      <View className="items-center mt-[20px] pb-[4px]">
        <Text className="text-[36px] font-baloo  text-[#923030] ">MYMESS</Text>
      </View>
      <KeyboardAvoidingView>
        <Text className="text-slate-600 text-[18px] font-semibold mt-[22px]">
          Enter your mobile number
        </Text>

        <View className="flex-row items-center space-x-2 bg-[#f0f8ff] py-[5px] rounded-[10px] mt-[22px] ">
          <Text className="text-gray-700 text-[18px] my-[14px] pl-4 w-[50] font-bold ">
            +91
          </Text>
          <TextInput
            value={mobNum}
            keyboardType="numeric"
            onChangeText={(text) => setMobNum(text)}
            placeholder="Mobile"
            placeholderTextColor="gray"
            className="text-gray-500 text-[20px] tracking-[1.2px] w-[300] font-semibold "
          />
        </View>
        <Pressable
          onPress={() => {
            LogIn();
          }}
          className="bg-[#923030] rounded-[10px] my-[10px] py-4 mt-[50px] "
        >
          <Text className="text-center font-[600] text-[18px] text-white uppercase">
            Continue
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default MobileLogin;
