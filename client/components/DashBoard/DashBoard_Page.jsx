import { View, Text, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DashBoard_Page = () => {
  return (
    <View className="flex-1 py-4">
      <TouchableOpacity
        onPress={() => {
          router.push("/pages/member_payment_status");
          // Alert.alert("Get 10% OFF on your Food Membership");
        }}
        className="flex-row items-center justify-between bg-[#853e3a] px-4 py-[25px] rounded-[16px] mt-4 mx-2"
      >
        <View className="flex-1 flex-col gap-1">
          <Text className="text-white font-bold text-[18px] ">
            Food Members Payment Status:
          </Text>
          <Text className="text-white text-[12px] font-semibold">
            Your food members details and you can track all the info related to
            your mess
          </Text>
        </View>

        <Text className="text-[#853e3a] bg-[#ffffff] px-4 py-[8px]  rounded-[8px] text-[16px] font-bold ">
          View
        </Text>
      </TouchableOpacity>

      <View
        style={{
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        className="flex-row items-center justify-between bg-[#ffffff] space-x-4 px-4 py-[25px] rounded-[16px] mt-4 mx-2"
      >
        <View className="flex-1 flex-col gap-1">
          <Text className="text-[#d40f0f] font-bold text-[18px] ">
            Delete Mess Account
          </Text>
          <Text className="text-[#747373] text-[12px] font-semibold">
            If you want to delete your mess account, your mess listing will be
            parmanently deleted
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // router.push("/dashboard/add_members");
            Alert.alert("Want to delete mess Account?");
          }}
          className=" px-4 py-[8px] bg-[#d10707] rounded-[8px] text-[16px] font-bold "
        >
          <Text className="text-[#ffffff] font-bold ">Delete</Text>
        </TouchableOpacity>
      </View>

      {/* <View className="flex-row items-center justify-between p-4 bg-white mt-4">
        
        <View className="flex-row items-center gap-4 ">
          <FontAwesome name="handshake-o" size={20} color="black" />
          <View className="">
            <Text className="text-[16px] font-[600] text-[#070707] ">
              Our Service
            </Text>
            <Text>Here are some of our services</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View>

      <View className="flex-row items-center justify-between p-4 bg-white mt-4">
        <View className="flex-row items-center gap-4 ">
          <FontAwesome6 name="users-rays" size={24} color="black" />
          <View className="">
            <Text className="text-[16px] font-[600] text-[#070707] ">
              About Us
            </Text>
            <Text>Who we are and what we do</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View>

      <View className="flex-row items-center justify-between p-4 bg-white mt-4">
        <View className="flex-row items-center gap-4 ">
          <FontAwesome name="question-circle-o" size={24} color="black" />
          <View className="">
            <Text className="text-[16px] font-[600] text-[#070707] ">
              FAQ's
            </Text>
            <Text>Frequently asked questions </Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View>

      <View className="flex-row items-center justify-between p-4 bg-white mt-4">
        <View className="flex-row items-center gap-4 ">
          <Ionicons name="call-outline" size={24} color="black" />
          <View className="">
            <Text className="text-[16px] font-[600] text-[#070707] ">
              Contact Us
            </Text>
            <Text>Contact us for any query</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View>
      <View className="flex-row items-center justify-between p-4 bg-white mt-4">
        <View className="flex-row items-center gap-4 ">
          <Ionicons name="call-outline" size={24} color="black" />
          <View className="">
            <Text className="text-[16px] font-[600] text-[#070707] ">
              Close Mess
            </Text>
            <Text>Close Mess for the day</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={20} color="black" />
      </View> */}
    </View>
  );
};

export default DashBoard_Page;
