import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector } from "react-redux";

const User_Details = () => {
  const { userId, username } = useSelector((state) => state.user);

  return (
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert("User Details")}
        className="flex-1 flex-row items-center justify-start space-x-2 p-4 bg-white mt-4 mx-4 rounded-l-[50px] rounded-r-[20px]"
      >
        <View
          style={{
            backgroundColor: "#853e3a",
            width: 65,
            height: 65,
            borderRadius: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="text-white text-[18px] font-bold">
            <Ionicons name="person" size={30} color="white" />
          </Text>
        </View>
        <View className="flex-col items-start ">
          <Text className="text-[24px] font-baloo text-[#853e3a] ">
            {/* User Id: #{userId.slice(14)} */}
            {username}
          </Text>
          <Text className="text-[12px] font-semibold text-[#555454] ">
            View Profile Details
          </Text>
        </View>
      </TouchableOpacity>

      <View className="flex-1 py-4 items-center justify-center bg-[#d4edee81]">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => Alert.alert("User Details")}
            className="flex items-center justify-center w-[180px]  rounded-[16px] pb-2 mx-[10px] border-[1px] border-gray-300 bg-white"
          >
            <View className="bg-white w-[178px] border-b-[2px] border-gray-400 h-[100px] items-center justify-center rounded-t-[16px] overflow-hidden ">
              <Image
                source={require("../../assets/images/icon.png")}
                className="w-[80px] h-[80px] "
              />
            </View>

            <Text className="text-[18px] font-[500] mt-[6px]">Profile</Text>
            <Text className="text-[10px] text-gray-500 mt-[3px]">
              All order Items
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // router.push("/seeorders");
              Alert.alert("User Dashboard");
            }}
            className="flex items-center justify-center w-[180px]  rounded-[16px] pb-2 mx-[10px] border-[1px] border-gray-300 bg-white"
          >
            <View className="bg-white w-[178px] border-b-[2px] border-gray-400 h-[100px] items-center justify-center rounded-t-[16px] overflow-hidden">
              <Image
                source={require("../../assets/images/bag.png")}
                className="w-[80px] h-[80px] "
              />
            </View>

            <Text className="text-[18px] font-[500] mt-[6px]">Order</Text>
            <Text className="text-[10px] text-gray-500 mt-[3px]">
              All order Items
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center mt-4">
          <TouchableOpacity
            onPress={() => {
              // router.replace("/cart");
              Alert.alert("User Details");
            }}
            className="flex items-center justify-center w-[180px]  rounded-[16px] pb-2 mx-[10px] border-[1px] border-gray-300 bg-white"
          >
            <View className="bg-white w-[178px] border-b-[2px] border-gray-400 h-[100px] items-center justify-center rounded-t-[16px] overflow-hidden ">
              <Image
                source={require("../../assets/images/bag.png")}
                className="w-[80px] h-[80px] "
              />
            </View>

            <Text className="text-[18px] font-[500] mt-[6px]">Your Cart</Text>
            <Text className="text-[10px] text-gray-500 mt-[3px]">
              All cart items delete here
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              // router.push("/addItems")
              Alert.alert("User Details")
            }
            className="flex items-center justify-center w-[180px]  rounded-[16px] pb-2 mx-[10px] border-[1px] border-gray-300 bg-white"
          >
            <View className="bg-white w-[178px] border-b-[2px] border-gray-400 h-[100px] items-center justify-center rounded-t-[16px] overflow-hidden ">
              <Image
                source={require("../../assets/images/bag.png")}
                className="w-[80px] h-[80px] "
              />
            </View>

            <Text className="text-[18px] font-[500] mt-[6px]">Add Items</Text>
            <Text className="text-[10px] text-gray-500 mt-[3px]">
              All food Items created here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default User_Details;
