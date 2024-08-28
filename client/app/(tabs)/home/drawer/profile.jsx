import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Mess_Profile from "../../../../components/Mess_Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 ">
      <View className="bg-[#853e3a] flex-row items-center justify-between px-4 py-[10px] ">
        <Ionicons
          onPress={() => router.back()}
          style={{ backgroundColor: "white", borderRadius: 50, padding: 8 }}
          name="arrow-back"
          size={24}
          color="#853e3a"
        />
        <Text className="text-white text-[18px] font-bold ">Mess Profile</Text>
      </View>
      <ScrollView className="flex-1 ">
        <View className="flex-1 ">
          <Mess_Profile />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
