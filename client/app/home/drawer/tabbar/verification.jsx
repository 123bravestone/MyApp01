import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../../../components/Home/Header";

let CODE;

const Verification = () => {
  const { width, height } = Dimensions.get("window");

  const [verifyCode, setVerifyCode] = useState("");
  const [flag, setFlag] = useState(false);
  const [msg, setMsg] = useState("null");
  const [verifyUser, setVerifyUser] = useState([]);
  const [invalidUser, setInvalidUser] = useState({});

  const userData = [
    {
      id: 1,
      name: "Kamal",
      roll: "20234",
      paid: true,
      code: "12341",
      time: moment().format("hh:mm A"),
    },
    {
      id: 2,
      name: "Arnav",
      roll: "20294",
      paid: false,
      code: "12342",
      time: moment().format("hh:mm A"),
    },
    {
      id: 3,
      name: "Akshay",
      roll: "20434",
      paid: true,
      code: "12343",
      time: moment().format("hh:mm A"),
    },
    {
      id: 4,
      name: "Sharukh",
      roll: "20387",
      paid: false,
      code: "12344",
      time: moment().format("hh:mm A"),
    },

    {
      id: 5,
      name: "Nitin",
      roll: "26754",
      paid: true,
      code: "12345",
      time: moment().format("hh:mm A"),
    },

    {
      id: 6,
      name: "Salman",
      roll: "20064",
      paid: true,
      code: "12346",
      time: moment().format("hh:mm A"),
    },
  ];

  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    // console.log("moment", moment().format("hh:mm A"));
    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      handleKeyboardShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      handleKeyboardHide
    );

    return () => {
      showSubscription.remove();
    };
  }, []);

  const handleKeyboardShow = (event) => {
    setIsKeyboardVisible(true);
  };

  const handleKeyboardHide = (event) => {
    setMsg("null");
    setIsKeyboardVisible(false);
  };
  const handleVerification = () => {
    CODE = verifyCode;
    setVerifyCode("");

    if (CODE) {
      for (let i = 0; i < verifyUser.length; i++) {
        if (verifyUser[i].code === CODE) {
          setFlag(true);
          setMsg("failed");
          setInvalidUser(verifyUser[i]);
          return;
        }
      }

      for (let i = 0; i < userData.length; i++) {
        if (userData[i].code === CODE) {
          setMsg("success");
          setVerifyUser([...verifyUser, userData[i]]);
          return;
        }
      }
      setMsg("invalidCode");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff] ">
      <Header />

      <View style={{ height: height / 4 }} className=" justify-center">
        {msg === "success" ? (
          <View className="flex items-center bg-[#70f86437] py-4 mx-4 rounded-[26px] ">
            <Text
              style={{ fontSize: hp(3.5) }}
              className="text-[#27ae0f] font-bold"
            >
              Verify Successfull
            </Text>
            <Text
              style={{ fontSize: hp(3) }}
              className="text-[#202020] font-bold "
            >
              Code: {CODE}
            </Text>
            <Text
              style={{ fontSize: hp(2) }}
              className="text-[#202020] font-bold "
            >
              Timing: {moment().format("hh:mm A")}
            </Text>
          </View>
        ) : msg === "failed" && invalidUser ? (
          <View className="flex items-center bg-[#ffb3b3] py-4 mx-4 rounded-[26px] ">
            <Text
              style={{ fontSize: hp(3.5) }}
              className="text-[#d80909] font-bold"
            >
              Code Already Used
            </Text>
            <View className="flex flex-row items-center space-x-2 bg-[#808080] p-4 mx-4 rounded-[26px] ">
              <View className="w-[40px] h-[40px]  bg-[#fefefe] rounded-full  ">
                <Text className="text-[#808080] font-baloo text-[26px] text-center">
                  {invalidUser?.name.slice(0, 1).toUpperCase()}
                </Text>
              </View>

              <View className="flex-1 flex-row items-center justify-between">
                <View className="flex-col items-start">
                  <Text className="text-[#ffffff] font-bold text-[18px] ">
                    {invalidUser.name}
                  </Text>
                  <Text className="text-[#ffffff] text-[14px] ">
                    Timing: {invalidUser.time}
                  </Text>
                </View>
                <View className="flex-col items-start">
                  <Text className="text-[#ffffff] font-bold text-[20px] ">
                    Code:{invalidUser.code}
                  </Text>
                  <Text className="text-[#ffffff] font-bold text-[16px] ">
                    {invalidUser.paid === true ? "Paid" : "Unpaid"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : msg === "invalidCode" ? (
          <View className="flex items-center bg-[#e6e6e6] py-4 mx-4 rounded-[26px] ">
            <Text
              style={{ fontSize: hp(3.5) }}
              className="text-[#cd2f2f] font-bold"
            >
              Invalid Code
            </Text>
          </View>
        ) : (
          <View className="flex items-center bg-[#e6e6e6] py-4 mx-4 rounded-[26px] ">
            <Text
              style={{ fontSize: hp(3.5) }}
              className="text-[#1c1c1c] font-bold"
            >
              Enter Verification Code
            </Text>

            <Text
              style={{ fontSize: hp(3) }}
              className="text-[#236df6] font-bold "
            >
              Timing: {moment().format("hh:mm:ss A")}
            </Text>
          </View>
        )}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        // keyboardVerticalOffset={160}
        // className=" flex-1 "
      >
        <View style={{ height: height / 6 }}>
          <Text
            style={{ fontSize: hp(2.5) }}
            className="text-[#202020] font-bold py-2 mt-4 mx-2"
          >
            Enter verification code:
          </Text>
          <TextInput
            value={verifyCode}
            onChangeText={(text) => {
              setVerifyCode(text);
              setMsg("null");
            }}
            maxLength={5}
            placeholder="Enter code"
            placeholderTextColor={"#a8a7a7"}
            style={{ fontSize: hp(3.8) }}
            keyboardType="number-pad"
            className="text-[#202020] bg-white font-bold px-4 py-2 mx-2  rounded-[10px] border border-gray-300"
          />
        </View>
      </KeyboardAvoidingView>
      <ScrollView className="flex-1 ">
        {verifyUser.length > 0 &&
          verifyUser
            .slice(0)
            .reverse()
            .map((items, index) => (
              <View
                key={index}
                className={`${
                  items.paid === true ? "bg-[#853e3a]" : "bg-[#eb2e2e]"
                } flex flex-row items-center space-x-2 p-4 mx-4 my-2 rounded-[26px]  `}
              >
                <View className="w-[40px] h-[40px]  bg-[#fefefe] rounded-full  ">
                  <Text className="text-[#853e3a] font-baloo text-[26px] text-center">
                    {items?.name.slice(0, 1).toUpperCase()}
                  </Text>
                </View>

                <View className="flex-1 flex-row items-center justify-between">
                  <View className="flex-col items-start">
                    <Text className="text-[#ffffff] font-bold text-[18px] ">
                      {items.name}
                    </Text>
                    <Text className="text-[#ffffff] text-[14px] ">
                      Timing: {items.time}
                    </Text>
                  </View>

                  <View className="flex-col items-start">
                    <Text className="text-[#ffffff] font-bold text-[20px] ">
                      Code:{items.code}
                    </Text>
                    <Text className="text-[#ffffff] font-bold text-[16px] ">
                      {items.paid === true ? "Paid" : "Unpaid"}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
      </ScrollView>

      {isKeyboardVisible && (
        <View
          style={{ width: width }}
          className="flex flex-row items-center justify-between mt-4"
        >
          <TouchableOpacity
            onPress={Keyboard.dismiss}
            className="bg-[#e0e0e0] flex-1 items-center p-4"
          >
            <Text
              style={{ fontSize: hp(2.5) }}
              className="text-[#000000] font-bold"
            >
              Cancle
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleVerification}
            className="bg-[#3bc01a] flex-1 items-center p-4"
          >
            <Text
              style={{ fontSize: hp(2.5) }}
              className="text-[#ffffff] font-bold"
            >
              Verify
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Verification;
