import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { router } from "expo-router";
import Member_request from "../../../components/Drawer_Page/Member_request_box";

const Add_Members = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#f2f2f2]">
      <View className="bg-[#853e3a] flex-row items-center justify-between px-4 py-[10px] ">
        <Ionicons
          onPress={() => router.back()}
          style={{ backgroundColor: "white", borderRadius: 50, padding: 8 }}
          name="arrow-back"
          size={24}
          color="#853e3a"
        />
        <Text className="text-white text-[18px] font-bold ">Add Members</Text>
      </View>
      <ScrollView className="flex-1 ">
        <Member_request />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Add_Members;
