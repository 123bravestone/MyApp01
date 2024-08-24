import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  BackHandler,
  Image,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUsername, setToken } from "../../store/CreateSlices/UserSlice";

const UserName = ({ setValidation, setFlag }) => {
  const [username, setUsername] = useState("");
  const { userId } = useSelector((state) => state.user);
  const dispatchEvent = useDispatch();

  const handleSubmit = async () => {
    await axios
      .post(`${process.env.EXPO_PUBLIC_API_URL}/api/user/verify_user`, {
        username: username,
        userId: userId,
      })
      .then((response) => {
        if (response.data) {
          router.replace("/home");
          dispatchEvent(addUsername(response.data.username));
          dispatchEvent(setToken(true));
        } else {
          Alert.alert("Something went wrong in username");
        }
      })
      .catch((error) => {
        Alert.alert("Error in username");
        console.log("username error", error);
      });
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
    <View className="flex-1 bg-white ">
      <View className=" flex-1  items-center justify-end">
        <Image className="" source={require("../../assets/images/Image.png")} />
      </View>

      <View className="  flex-[2] mt-[40px] ">
        <View className="flex-1 items-center">
          <Text className="text-[26px] font-[800]  text-[#ea773a] my-4">
            Success!
          </Text>
          <Text className="text-[20px] text-center w-[320px] text-[#636564e5] ">
            Congratulations! You have been successfully authenticated
          </Text>
        </View>

        <View className="flex-[2] mx-[40px] ">
          <Text className="text-[18px] text-[#ea773a] font-bold ">
            Enter Username
          </Text>
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            className="border-[1px] text-[18px] border-[#ea773a] rounded-[10px] py-4 px-[20px] my-2"
            placeholder="Username"
          />
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
            className="mt-[28px] bg-[#ea773a] rounded-[10px] py-4"
          >
            <Text className="text-[18px]  text-[#ffffff] font-bold  text-center uppercase ">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserName;
